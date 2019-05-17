import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { MatStepperModule, MatIconModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

import { Material } from './registration/material'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DesignModule } from './design/design.module'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { UserModule } from './user/user.module';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from './shared/shared.module';
import { PracticeComponent } from './practice/practice.component';
// import {NgModule,NO_ERROR_SCHEMA} from '@angular/core'

var myroutes: Routes = [{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
{ path: 'home', component: HomeComponent },
{ path: 'aboutus', component: AboutusComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'cpwd', component: ChangepasswordComponent },
{ path: 'forgot', component: ForgotpasswordComponent },
{ path: 'practice', component: PracticeComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ForgotpasswordComponent,
    RegistrationComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(myroutes), HttpClientModule, FormsModule, NgbModule,
    CarouselModule.forRoot(),
    AdminModule,
    ClientModule,
    UserModule,
    MatIconModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    DesignModule,
    TranslateModule,
    Material,
    ReactiveFormsModule, SharedModule,
    // MDB bootstrap module.for root()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
