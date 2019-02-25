import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { IUser } from '../models/user.model';
import { ip } from '../backend-ip';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static audio: string;
  static username: string;
  static user: IUser;
  static userImage: string;
  static method: string;
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

  setMethod(method: string) {
    UserService.method = method;
  }

  getMethod() {
    if (UserService.method !== undefined) {
      return UserService.method;
    } else {
      return undefined;
    }
  }

  setUserData(user: IUser) {
    console.log(user);
    UserService.user = user;
  }

  getUserData() {
    return UserService.user;
  }

}
