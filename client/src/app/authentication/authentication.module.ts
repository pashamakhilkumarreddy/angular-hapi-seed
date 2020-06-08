import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Page404Component } from './page404/page404.component';
import {AuthenticationRoutingModule} from './authentication.routing';


@NgModule({
  declarations: [LoginComponent, SignupComponent, Page404Component],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
