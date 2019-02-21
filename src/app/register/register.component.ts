import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usernameValid: boolean;
  registerForm: FormGroup;


  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = fb.group({
      first_name: this.fb.control('', [Validators.required]),
      last_name: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      mobile: this.fb.control('', [Validators.required]),
      dob: this.fb.control('', [Validators.required]),

    });
  }
  ngOnInit() { }

  verifyUsername() {
    console.log(this.registerForm.value.username);
    const username = this.registerForm.value.username;
    // this.userService.verifyUsername(username).subscribe(
    //   res => {
    //     console.log(res);
    //     if (res.toString() === 'Valid') {
    //       this.usernameValid = true;
    //     } else {
    //       this.usernameValid = false;
    //     }
    //   }
    // );
    if (username === 'a') {
      this.usernameValid = true;
    }
  }

  change() {
    console.log('change');
  }

  submitForm() {
    const obj = this.registerForm.value;
    this.userService.register(obj).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
