import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClimbComponent } from './add-climb/add-climb.component';
import { ClimbListComponent } from './climb-list/climb-list.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    pathMatch: 'full',
    component: LandingPageComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'registration',
    pathMatch: 'full',
    component: RegistrationComponent  
  },
  {
    path: 'dashboard',
    pathMatch: 'full', 
    component: DashboardComponent
  },
  {
    path: 'add-climb',
    pathMatch: 'full', 
    component: AddClimbComponent
  },
  {
    path: 'climb-list',
    pathMatch: 'full', 
    component: ClimbListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
