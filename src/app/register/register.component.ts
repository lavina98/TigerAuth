import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { UserRegisterService } from '../shared/services/user-register.service';
import { IResponse } from '../shared/models/single-word-response.model';
import { NavBarService } from '../shared/services/navbarservice';


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
    private userRegisterService: UserRegisterService, private navBarService: NavBarService) {
    this.registerForm = fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      mobile: this.fb.control('', [Validators.required]),
      dateOfBirth: this.fb.control('', [Validators.required]),

    });
  }

  ngOnInit() {
    this.navBarService.hide();
  }

  verifyUsername() {
    console.log(this.registerForm.value.username);
    const username = this.registerForm.value.username;
    this.userRegisterService.verifyUsername(username).subscribe(
      (res: IResponse) => {
        const message = res.message;
        if (message === 'VALID') {
          console.log('valid');
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
    // this.userService.setLoginStatus('Invalid');
    const value = this.registerForm.value;
    const user = {
      username: value.username,
      name: value.firstName + ' ' + value.lastName,
      dob: value.dateOfBirth,
      phone: value.mobile
    };
    console.log(user);
    // this.userService.setUserData(user);
    this.userRegisterService.setFormData(user);
    this.router.navigate(['/face-register']);
  }

}
