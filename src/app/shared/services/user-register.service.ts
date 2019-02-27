import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ip } from '../backend-ip';
import { IUserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})

export class UserRegisterService {
  static user: IUserDetails;
  static image: string;
  static audio: string;
  constructor(private http: HttpClient) { }



  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    const url = ip + '/register/verifyUsername';
    return this.http.post(url, obj);
  }

  setFormData(user: IUserDetails) {
    UserRegisterService.user = user;
  }

  sendOTP() {
    console.log(UserRegisterService.user.phone);
    const obj = {
      phone: UserRegisterService.user.phone
    };

    const url = ip + '/register/verifyOTP';
    return this.http.post(url, obj);

    // otp as response
  }

  setUserImage(image: string) {
    UserRegisterService.image = image;
  }

  setUserAudio(audio: string) {
    UserRegisterService.audio = audio;
  }


  submit() {
    const obj = {
      user: UserRegisterService.user,
      img: UserRegisterService.image,
      audio: UserRegisterService.audio
    };

    const url = ip + '/register/submit';
    return this.http.post(url, obj);
  }

}
