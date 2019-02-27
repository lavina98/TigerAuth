import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from '../shared/services/user-register.service';
import { UserLoginService } from '../shared/services/user-login.service';
import { Router } from '@angular/router';
import { IResponse } from '../shared/models/single-word-response.model';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})

export class OtpLoginComponent implements OnInit {

  otpForm: FormGroup;
  otp = '111111';
  method: string;

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
    this.userRegisterService.sendOTP().subscribe(
      (res: IResponse) => {
        this.otp = res.message;
      }
    );
  }

  verify() {

    if (this.otp === this.otpForm.value.otp) {
      console.log('Valid OTP');
      this.router.navigate(['/audio-record']);
    }

  }

}
