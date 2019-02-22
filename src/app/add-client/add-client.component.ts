import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientRegisterForm: FormGroup;
  registrationSuccessful: boolean;
  userData = ['userName', 'phone', 'dateOfBirth', 'profilePicture'];
  constructor(private fb: FormBuilder) {
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
    // consume api and give user the clientID and clientSecret
    // redirecting to dashboard
  }
}
