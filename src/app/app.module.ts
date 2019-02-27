import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebcamModule} from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientService } from './shared/services/client.service';
import { UserService } from './shared/services/user.service';
import { AddClientComponent } from './add-client/add-client.component';
import { UserloginListComponent } from './userlogin-list/userlogin-list.component';
import { UserLoginService } from './shared/services/user-login.service';
import { UserRegisterService } from './shared/services/user-register.service';
import { CookieService } from 'ngx-cookie-service';
import { TransitionPageComponent } from './transition-page/transition-page.component';
import { VoiceRegisterComponent } from './voice-register/voice-register.component';
import { VoiceLoginComponent } from './voice-login/voice-login.component';
import { FaceLoginComponent } from './face-login/face-login.component';
import { FaceRegisterComponent } from './face-register/face-register.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';
import { OtpRegisterComponent } from './otp-register/otp-register.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    PermissionsComponent,
    ProfileComponent,
    ClientDashboardComponent,
    AddClientComponent,
    UserloginListComponent,
    TransitionPageComponent,
    VoiceRegisterComponent,
    VoiceLoginComponent,
    FaceLoginComponent,
    FaceRegisterComponent,
    OtpLoginComponent,
    OtpRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientService,
    UserService,
    UserLoginService,
    UserRegisterService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
