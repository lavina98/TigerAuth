import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebcamModule} from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FaceScanComponent } from './face-scan/face-scan.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ClientPermissionsComponent } from './client-permissions/client-permissions.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { AudioRecordComponent } from './audio-record/audio-record.component';
import { RedirectComponent } from './redirect/redirect.component';
import { OtpComponent } from './otp/otp.component';
import { ClientService } from './shared/services/client.service';
import { UserService } from './shared/services/user.service';
import { AddClientComponent } from './add-client/add-client.component';
import { VideoAuthComponent } from './video-auth/video-auth.component';
import { UserloginListComponent } from './userlogin-list/userlogin-list.component';
import { UserLoginService } from './shared/services/user-login.service';
import { UserRegisterService } from './shared/services/user-register.service';
import { CookieService } from 'ngx-cookie-service';
import { TransitionPageComponent } from './transition-page/transition-page.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    FaceScanComponent,
    LoginComponent,
    DashboardComponent,
    PermissionsComponent,
    ClientPermissionsComponent,
    ProfileComponent,
    ClientDashboardComponent,
    AudioRecordComponent,
    RedirectComponent,
    OtpComponent,
    AddClientComponent,
    VideoAuthComponent,
    UserloginListComponent,
    TransitionPageComponent
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
