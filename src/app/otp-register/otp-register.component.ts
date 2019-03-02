import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from '../shared/services/user-register.service';
import { Router } from '@angular/router';
import { IResponse } from '../shared/models/single-word-response.model';

@Component({
  selector: 'app-otp-register',
  templateUrl: './otp-register.component.html',
  styleUrls: ['./otp-register.component.css']
})

export class OtpRegisterComponent implements OnInit {

  otpForm: FormGroup;
  otp = '111111';
  method: string;

  constructor(
    private fb: FormBuilder,
    private userRegisterService: UserRegisterService,
    private router: Router) {
    this.otpForm = fb.group({
      otp: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.userRegisterService.sendOTP().subscribe(
      (res: IResponse) => {
        this.otp = res.message;
        console.log(this.otp);
      }
    );
  }

  verify() {

    if (this.otp === this.otpForm.value.otp) {
      console.log('Valid OTP');
      this.router.navigate(['/voice-register']);
    }

  }

  resendOTP() {
    this.userRegisterService.sendOTP().subscribe(
      (res: IResponse) => {
        this.otp = res.message;
        console.log(this.otp);
      }
    );
  }

}
