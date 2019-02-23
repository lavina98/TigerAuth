import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IClient } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientRegisterForm: FormGroup;
  registrationSuccessful: boolean;
  client: IClient;
  userData = ['userName', 'phone', 'dateOfBirth', 'profilePicture'];
  constructor(private fb: FormBuilder , private clientService: ClientService ) {
    this.clientRegisterForm = this.fb.group({
      website: this.fb.control('', [Validators.required]),
      redirectUrl: this.fb.control('', [Validators.required]),
      userName: this.fb.control(false),
      phone: this.fb.control(false),
      dateOfBirth: this.fb.control(false),
      profilePicture: this.fb.control(false),
      authenticationMethod: this.fb.control('')
    });
  }

  ngOnInit() {
    this.registrationSuccessful = false;
  }

  registerClient() {
    console.log(this.clientRegisterForm.value);
    this.registrationSuccessful = true;
    this.client = this.clientRegisterForm.value;
    this.clientService.registerClient(this.client);
    // consume api and give user the clientID and clientSecret
    // redirecting to dashboard
  }
}
