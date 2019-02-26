import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { UserRegisterService } from '../shared/services/user-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameValid = false;
  registerForm: FormGroup;

  formOK = false;
  faceOK = false;
  voiceOK = false;
  optOK = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private userRegisterService: UserRegisterService) {
    this.registerForm = fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      mobile: this.fb.control('', [Validators.required]),
      dateOfBirth: this.fb.control('', [Validators.required]),

    });
  }

  ngOnInit() { }

  verifyUsername() {
    console.log(this.registerForm.value.username);
    const username = this.registerForm.value.username;
    this.userRegisterService.verifyUsername(username).subscribe(
      res => {
        console.log(res);
        if (res.toString() === 'Valid') {
          this.usernameValid = true;
        } else {
          this.usernameValid = false;
        }
      }
    );
    // if (username === 'a') {
    //   this.usernameValid = true;
    // }
  }

  change() {
    console.log('change');
  }

  submitForm() {
    const method = 'register';
    this.userService.setUsername(this.registerForm.value.username);
    this.userService.setMethod(method);
    const obj = this.registerForm.value;
    this.userService.setUserData(obj);
    this.router.navigate(['/otp']);
  }

}
