import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-module/login/login.component';
import { CarouselComponent } from './shared-module/carousel/carousel.component';
import { TrainingComponent } from './training-module/training/training.component';
import {SignupComponent} from './login-module/signup/signup.component';

const routes: Routes = [
  {path: '' , redirectTo: 'carousel', pathMatch: 'full'},
  {path: 'carousel' , component: CarouselComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'training' , component: TrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
