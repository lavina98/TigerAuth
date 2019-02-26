import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IClient } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientRegisterForm: FormGroup;
  registrationSuccessful: boolean;
  client: IClient;
  userData = ['name', 'phone', 'dateOfBirth', 'profilePicture'];
  authentication = [
    'faceAuthentication',
    'voiceAuthentication',
    'otpAuthentication'
  ];
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private http: HttpClient
  ) {
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
    this.http.get('');

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
