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
  static audios: any;
  constructor(private http: HttpClient) { }



  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    const url = ip + '/register/verifyUsername';
    console.log(url);
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
  }

  setUserImage(image: string) {
    UserRegisterService.image = image;
  }

  setUserAudio(audio: any) {
    UserRegisterService.audios = {
      audio1: audio[0],
      audio2: audio[1],
      audio3: audio[2],
      audio4: audio[3],
      audio5: audio[4]
    };
  }

  submit() {
    const user1 = {
      username: UserRegisterService.user.username,
      audio: UserRegisterService.audios,
      name: UserRegisterService.user.name,
      dob: UserRegisterService.user.dob,
      phone: UserRegisterService.user.phone,
    };

    const obj = {
      user: user1,
      img: UserRegisterService.image,
    };

    const url = ip + '/register/submit';
    return this.http.post(url, obj);
  }

}
