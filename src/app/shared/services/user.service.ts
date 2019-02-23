import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static audio: string;
  static username: string;
  static user: IUser;
  static userImage: string;
  constructor(private http: HttpClient) { }

  setUsername(username: string) {
    UserService.username = username;
  }

  getUsername() {
    if (UserService.username !== undefined) {
      return UserService.username;
    } else {
      return undefined;
    }
  }

  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    return this.http.post('', obj);
  }

  verifyOtp() {
    const obj = {};
    const url = '';
    return this.http.post(url, obj);
  }

  register(obj: any) {
    return this.http.post('', obj);
  }

  login(obj: any) {
    const url = '';
    return this.http.post(url, obj);
  }

  setUserData(user: IUser) {
    console.log(user);
    UserService.user = user;
  }

  getUserData() {
    return UserService.user;
  }

  setUserImage(image: string) {
    UserService.userImage = image;
  }

  setUserAudio(audio: Blob) {
    // UserService.audio = audio;
    // console.log(audio);
    // console.log(typeof(audio));
  }
}
