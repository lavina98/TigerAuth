import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {
  clientRegisterForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.clientRegisterForm = fb.group({
      official_name: this.fb.control('', [Validators.required]),
      website: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      redirect_url: this.fb.control('', [Validators.required]),
    });
   }

  ngOnInit() {
  }

  registerClient() {
    console.log(this.clientRegisterForm.value);
  }
}
