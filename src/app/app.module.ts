import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddClimbComponent } from './add-climb/add-climb.component';
import { ClimbListComponent } from './climb-list/climb-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClimbObservablesService } from './services/observables/climb-observables.service';
import { ClimbsListServiceService } from './services/climbs-list-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GraphComponent } from './dashboard/graph/graph.component';
import { ClimbDetailComponent } from './climb-list/climb-detail/climb-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth-service';
import { AuthGuard } from './auth-guard-service';
import { ClimbListItemComponent } from './climb-list/climb-list-item/climb-list-item.component';
import { HighestSentComponent } from './dashboard/highest-sent/highest-sent.component';
import { LastClimbComponent } from './dashboard/last-climb/last-climb.component';
import { ClimbByDiffComponent } from './dashboard/climb-by-diff/climb-by-diff.component';
import { ClimbByAttemptComponent } from './dashboard/climb-by-attempt/climb-by-attempt.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AddClimbComponent,
    ClimbListComponent,
    DashboardComponent,
    RegistrationComponent,
    GraphComponent,
    ClimbDetailComponent,
    PageNotFoundComponent,
    ClimbListItemComponent,
    HighestSentComponent,
    LastClimbComponent,
    ClimbByDiffComponent,
    ClimbByAttemptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    ClimbObservablesService,
    ClimbsListServiceService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
