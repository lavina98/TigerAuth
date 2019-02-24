import { Injectable } from '@angular/core';
import { ip } from '../backend-ip';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    const url = ip + '/login/verifyOTP';
    return this.http.post(url, obj);
  }

  sendOTP(uname: string, mobile: string) {
    const obj = {
      phone: mobile
    };

    const url = ip + '/register/verifyOTP';
    return this.http.post(url, obj);

    // otp as response
  }

}
