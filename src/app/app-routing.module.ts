import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClimbComponent } from './add-climb/add-climb.component';
import { ClimbListComponent } from './climb-list/climb-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClimbDetailComponent } from './climb-list/climb-detail/climb-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent  
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'add-climb',
    component: AddClimbComponent
  },
  {
    path: 'climb-list',
    component: ClimbListComponent
  },
  {
    path: 'climb-list/:id',
    component: ClimbDetailComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
