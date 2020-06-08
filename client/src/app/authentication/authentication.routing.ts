import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
},
{
    path: 'signup',
    component: SignupComponent
},
{
    path: '**',
    component: Page404Component
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
