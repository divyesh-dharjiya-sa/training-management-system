import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login-module/login/login.component';
import { CarouselComponent } from './shared-module/carousel/carousel.component';
import {SignupComponent} from './login-module/signup/signup.component';
import {UserProfileComponent} from './login-module/user-profile/user-profile.component';
import {NotFoundComponent} from './shared-module/not-found/not-found.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '' , redirectTo: 'carousel', pathMatch: 'full'},
  {path: 'carousel' , component: CarouselComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user-profile' , component: UserProfileComponent,  canActivate: [AuthGuard]},
  {
    path: 'training',
    loadChildren: './training-module/training.module#TrainingModule'
  },
  {path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
