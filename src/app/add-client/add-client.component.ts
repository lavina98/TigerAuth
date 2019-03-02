import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IClient } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NavBarService } from '../shared/services/navbarservice';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientRegisterForm: FormGroup;
  registrationSuccessful: boolean;
  client: IClient;
  username: string;
  // userData = ['Name', 'Mobile', 'Date of Birth', 'Profile Picture'];
  userData = [
    {
      key: 'name',
      value: 'Name'
    },
    {
      key: 'phone',
      value: 'Mobile'
    },
    {
      key: 'dateOfBirth',
      value: 'Date of Birth'
    },
    {
      key: 'profilePicture',
      value: 'Profile Picture'
    }
  ];
  // authentication = [
  //   'faceAuthentication',
  //   'voiceAuthentication',
  //   'otpAuthentication'
  // ];
  authentication = [
    {
      key: 'faceAuthentication',
      value: 'Face Authentication'
    },
    {
      key: 'voiceAuthentication',
      value: 'Voice Authentication'
    },
    {
      key: 'otpAuthentication',
      value: 'OTP Authentication'
    },
  ];
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private http: HttpClient,
    private navBarService: NavBarService
  ) {
    this.navBarService.show();
    this.clientRegisterForm = this.fb.group({
      website: this.fb.control('', [Validators.required]),
      redirectUrl: this.fb.control('', [Validators.required]),
      name: this.fb.control(false),
      phone: this.fb.control(false),
      dateOfBirth: this.fb.control(false),
      profilePicture: this.fb.control(false),
      faceAuthentication: this.fb.control(false),
      voiceAuthentication: this.fb.control(false),
      otpAuthentication: this.fb.control(false)
    });
  }

  ngOnInit() {
  }

  registerClient() {
    console.log(this.clientRegisterForm.value);
    // this.registrationSuccessful = true;
    this.client = this.clientRegisterForm.value;
    this.clientService.registerClient(this.client).subscribe(data => {
      console.log('client registered');
      console.log(data);
      // this.downLoadFile(data, "text/plain")
      saveAs(data, 'txt secretKey.txt');
      this.router.navigate(['/client-dashboard']);
    });
    // consume api and give user the clientID and clientSecret
    // redirecting to dashboard
  }

}
