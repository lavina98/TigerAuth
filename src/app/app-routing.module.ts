import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceScanComponent } from './biometrics/face-scan/face-scan.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientPermissionsComponent } from './client-permissions/client-permissions.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { AudioRecordComponent } from './biometrics/audio-record/audio-record.component';
import { RedirectComponent } from './redirect/redirect.component';
import {AddClientComponent} from './add-client/add-client.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'face-scan', component: FaceScanComponent },
  { path: 'audio-record', component: AudioRecordComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'client-login', component: ClientLoginComponent},
  { path: 'client-dashboard', component: ClientDashboardComponent},
  // { path: 'client-permissions', component: ClientPermissionsComponent},
  {path: 'add-client', component: AddClientComponent},
  { path: 'redirect', component: RedirectComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
