import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      first_name: this.fb.control('', [Validators.required]),
      last_name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      username: this.fb.control('', [Validators.required]),
      mobile: this.fb.control('', [Validators.required]),
      dob: this.fb.control('', [Validators.required]),

    });
  }

  getUsername() {
    console.log(this.registerForm.value);
  }
  ngOnInit() {
  }

}
