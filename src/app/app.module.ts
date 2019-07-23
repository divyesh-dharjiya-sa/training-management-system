import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login-module/login.module';
import { TrainingModule } from './training-module/training.module';
import { SharedModule } from './shared-module/shared.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignupService} from './signup.service';
import {LoginService} from './login.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    TrainingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    SignupService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
