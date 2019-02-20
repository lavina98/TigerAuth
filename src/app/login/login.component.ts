import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {

  username: string;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private ls: LoginService) {
    this.loginForm = fb.group({
      username: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  checkUsername() {
    console.log(this.loginForm.value);
    this.username = this.loginForm.value.username;
    this.ls.validateUsername(this.username).subscribe(
      (data) => {
        console.log(data);
      },
      err => {
        console.log(err);
      }

    );
    this.router.navigate(['/face-scan']);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);

  }
}
