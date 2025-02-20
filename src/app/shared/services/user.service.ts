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
  // static status = 'Invalid';
  public audio: string;
  public username: string;
  public user: IUserDetails;
  public userImage: string;
  public loginStatus = 'Invalid';
  headers = {
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'tolek'
    })
  };
  constructor(private http: HttpClient) { }
  setLoginStatus(status: string) {
    this.loginStatus = status;
  }

  getLoginStatus() {
    if (this.loginStatus === 'Valid') {
      return this.loginStatus;
    } else {
      return 'Invalid';
    }
  }
// setting username till session ends
  setUsername(username: string) {
    sessionStorage.setItem('username', username);
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

  getUserListAndFactorAuth(clientName: string , clientToken: string , trusted: string) {
    // get list of users
    const dataTosend = {
      domainName : clientName,
      id: clientToken,
      type: trusted
    };
    console.log(dataTosend);
    return this.http.post(ip + '/loginUsers/listUsers' , dataTosend);
  }

  sendLocalStorageDataToServer(
    domainName: string,
    id: string,
    type: string,
    localStorageTigerAuth: any
  ) {
    console.log('sending request');
    const dataTosend = {
       domainName,
       type,
      id,
       TigerAuth: localStorageTigerAuth
    };
    console.log(dataTosend);
    return this.http.post(ip + '/loginUsers/listUsers', dataTosend);
  }

  // temporary function for checking
  setLocalStorage() {
    return this.http.get(ip + '/loginUsers/storeInLocalStorage');
  }

  getUserProfile() {
    const url = ip + '/userdata';
    return this.http.get(url);
  }
}

