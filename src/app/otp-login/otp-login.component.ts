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
  otp: string;

  constructor(
    private fb: FormBuilder,
    private userLoginService: UserLoginService,
    private router: Router) {
    this.otpForm = fb.group({
      otp: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
    // this.userLoginService.sendOTP().subscribe(
    //   (res: IResponse) => {
    //     this.otp = res.message;
    //   }
    // );
  }

  verify() {

    if (this.otp === this.otpForm.value.otp) {
      console.log('Valid OTP');
      // send local storage to server so it can set its token
      // and request for access token
      this.userLoginService.setOtpToken().subscribe((data) => {
        localStorage.setItem('TigerAuth', JSON.stringify(data));
        this.userLoginService.redirectUserAsPerAuthentication();
      });
    }
    // else show error and askuser to send otp again

  }

}
