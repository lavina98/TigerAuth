import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientPermissionsComponent } from './client-permissions/client-permissions.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { AudioRecordComponent } from './audio-record/audio-record.component';
import { RedirectComponent } from './redirect/redirect.component';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    FaceScanComponent,
    LoginComponent,
    DashboardComponent,
    PermissionsComponent,
    ClientLoginComponent,
    ClientPermissionsComponent,
    ProfileComponent,
    ClientDashboardComponent,
    ClientRegisterComponent,
    AudioRecordComponent,
    RedirectComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
