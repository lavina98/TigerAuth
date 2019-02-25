import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from '../shared/services/user-register.service';
import { UserLoginService } from '../shared/services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})

export class OtpComponent implements OnInit {

  method = 'register';
  otpForm: FormGroup;
  otp = 111111;

  constructor(
    private fb: FormBuilder,
    private userRegisterService: UserRegisterService,
    private userLoginService: UserLoginService,
    private router: Router) {
    this.otpForm = fb.group({
      otp: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
    if (this.method === 'register') {
      // this.userRegisterService.sendOTP();
    }
  }

  verify() {
    if (this.otp === this.otpForm.value.otp) {
      console.log('Valid OTP');
      this.router.navigate(['/audio-record']);
    }

  }

}
