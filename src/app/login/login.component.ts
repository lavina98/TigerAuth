import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  username: string;
  loginForm: FormGroup;
  clientName: string;
  clientToken: string;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loginForm = fb.group({
      username: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
      this.clientName = this.activatedRoute.snapshot.params.clientName;
      this.clientToken = this.activatedRoute.snapshot.params.clientToken;
      console.log(this.clientName + ' ' + this.clientToken);
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
