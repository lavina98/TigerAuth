import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  username: string;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      username: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  checkUsername() {
    console.log(this.loginForm.value);
    this.username = this.loginForm.value.username;
    this.router.navigate(['/face-scan']);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
