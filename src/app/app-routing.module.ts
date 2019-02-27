import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientPermissionsComponent } from './client-permissions/client-permissions.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AddClientComponent } from './add-client/add-client.component';
import { OtpComponent } from './otp/otp.component';
import { UserloginListComponent } from './userlogin-list/userlogin-list.component';
import { TransitionPageComponent } from './transition-page/transition-page.component';
import { FaceRegisterComponent } from './face-register/face-register.component';
import { FaceLoginComponent } from './face-login/face-login.component';
import { VoiceRegisterComponent } from './voice-register/voice-register.component';
import { VoiceLoginComponent } from './voice-login/voice-login.component';
import { OtpRegisterComponent } from './otp-register/otp-register.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'otp-register', component: OtpRegisterComponent },
  { path: 'face-register', component: FaceRegisterComponent },
  { path: 'voice-register', component: VoiceRegisterComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'client-login', component: ClientLoginComponent},
  { path: 'client-dashboard', component: ClientDashboardComponent },
  // { path: 'client-permissions', component: ClientPermissionsComponent},
  { path: 'add-client', component: AddClientComponent },
  { path: 'otp-login', component: OtpLoginComponent },
  { path: 'face-login', component: FaceLoginComponent },
  { path: 'voice-login', component: VoiceLoginComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'transition/:clientName/:clientToken/:trusted', component: TransitionPageComponent },
  { path: 'user-list/:clientName/:clientToken/:trusted', component: UserloginListComponent },
  { path: 'login/:clientName/:clientToken/:trusted', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
