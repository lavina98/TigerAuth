import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from '../shared/services/user-register.service';
import { UserLoginService } from '../shared/services/user-login.service';
import { Router } from '@angular/router';
import { IResponse } from '../shared/models/single-word-response.model';
import { NavBarService } from '../shared/services/navbarservice';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})

export class OtpLoginComponent implements OnInit {

  public otpForm: FormGroup;
  public otp: string;

  constructor(
    private fb: FormBuilder,
    private userLoginService: UserLoginService,
    private router: Router,
    private navBarService: NavBarService) {
    this.otpForm = fb.group({
      otp: this.fb.control(''),
    });
  }

  ngOnInit() {
    this.navBarService.hide();
    this.userLoginService.sendOTP().subscribe(
      (res: IResponse) => {
        console.log(res);
        this.otp = res.message;
      }
    );
  }

  click() {
    console.log('click');
  }

  public verify() {
    console.log('here');
    if (String(this.otp) == this.otpForm.value.otp) {
      console.log('Valid OTP');
      // send local storage to server so it can set its token
      // and request for access token
      this.userLoginService.setOtpToken().subscribe((res: { message: string, TigerAuth: any }) => {
        localStorage.setItem('TigerAuth', JSON.stringify(res.TigerAuth));
        this.userLoginService.afterSuccessfulLogin(res.TigerAuth).subscribe(
          (res: IResponse) => {
            if(res.message === 'valid') {
              this.router.navigate(['/dashboard']);              
            } else {
              alert('Login Failed. Please try again');
              this.router.navigate(['/login']);
            }
          }
        );
        // this.userLoginService.redirectUserAsPerAuthentication();



      });
    }
    else {
      alert('Enter the right otp');
    }

  }

  resendOTP() {
    this.userLoginService.sendOTP().subscribe(
      (res: IResponse) => {
        this.otp = res.message;
      }
    );
  }

}
