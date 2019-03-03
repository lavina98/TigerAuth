import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebcamModule} from 'ngx-webcam';
import { ChartsModule } from '../../node_modules/ng2-charts';

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
import { AboutUsComponent } from './about-us/about-us.component';
import { CookieService } from 'ngx-cookie-service';
import { TransitionPageComponent } from './transition-page/transition-page.component';
import { VoiceRegisterComponent } from './voice-register/voice-register.component';
import { VoiceLoginComponent } from './voice-login/voice-login.component';
import { FaceLoginComponent } from './face-login/face-login.component';
import { FaceRegisterComponent } from './face-register/face-register.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';
import { OtpRegisterComponent } from './otp-register/otp-register.component';
import { RedirectComponent } from './redirect/redirect.component';
import { NavBarService } from './shared/services/navbarservice';
import { AddCredentialsComponent } from './add-credentials/add-credentials.component';
import { AutoLoginComponent } from './auto-login/auto-login.component';
import { ViewCredentialsComponent } from './view-credentials/view-credentials.component';
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
    AboutUsComponent,
    UserloginListComponent,
    TransitionPageComponent,
    VoiceRegisterComponent,
    VoiceLoginComponent,
    FaceLoginComponent,
    FaceRegisterComponent,
    OtpLoginComponent,
    OtpRegisterComponent,
    RedirectComponent,
    NavbarComponent,
    AddCredentialsComponent,
    AutoLoginComponent,
    ViewCredentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    ClientService,
    UserService,
    UserLoginService,
    UserRegisterService,
    NavBarService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
