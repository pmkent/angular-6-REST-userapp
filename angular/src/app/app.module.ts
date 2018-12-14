import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ErrorHandler } from '@angular/core';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/security/login/login.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';

import { UserService } from './service/user.service';

import { ReactiveFormsModule } from '@angular/forms'; // bug fix
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component'; 

import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './pages/security/registration/registration.component';

import { AuthService } from './service/auth.service';
import { httpInterceptorProviders } from './util/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule, // bug fix
    HttpClientModule    
  ],
  providers: [
    UserService,
    AuthService,
    // { provide: ErrorHandler, useClass: ErrorsHandler },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
