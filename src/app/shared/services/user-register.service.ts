import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ip } from '../backend-ip';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  static user: IUser;
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

  setFormData(user: IUser) {
    UserRegisterService.user = user;
  }

  sendOTP() {
    const obj = {
      phone: UserRegisterService.user.mobile
    };

    const url = ip + '/register/verifyOTP';
    return this.http.post(url, obj);

    // otp as response
  }

  setUserImage(image: string) {
    UserRegisterService.image = image;
  }

  setUserAudio(audio) {
    UserRegisterService.audio = audio;

    const header = {
      headers: new HttpHeaders({
        'content-type': 'blob'
      })
    };
    const url = ip + '/audio';
    return this.http.post(url, audio, { headers: header.headers });

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
