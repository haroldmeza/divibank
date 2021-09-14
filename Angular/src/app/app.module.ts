import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './screens/registration/registration.component';
import { AdministrationComponent } from './screens/administration/administration.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleComponent } from './components/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { ProgressComponent } from './components/progress/progress.component';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './components/loans/loans.component';
import { LoanComponent } from './components/loan/loan.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AdministrationComponent,
    WelcomeComponent,
    FooterComponent,
    NavComponent,
    TitleComponent,
    AlertComponent,
    ProgressComponent,
    LoansComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
