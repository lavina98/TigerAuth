import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { IUserDetails } from '../models/user-details.model';
import { IUser } from '../models/user.model';
import { ip } from '../backend-ip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static status = 'Invalid';
  public audio: string;
  public username: string;
  public user: IUserDetails;
  public userImage: string;
  headers = {
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'tolek'
    })
  };
  constructor(private http: HttpClient) { }

  setLoginStatus(status: string) {
    UserService.status = status;
  }

  // getLoginStatus() {
  //   if (UserService.status !== undefined) {
  //     return UserService.status;
  //   } else {
  //     return undefined;
  //   }
  // }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    if (this.username !== undefined) {
      return this.username;
    } else {
      return undefined;
    }
  }

  setUserData(user: IUserDetails) {
    console.log(user);
    this.user = user;
  }

  getUserData() {
    return this.user;
  }

  getUserListAndFactorAuth(siteName: string) {
    // get list of users

    return this.http.get('', { observe: 'response' }).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

}
