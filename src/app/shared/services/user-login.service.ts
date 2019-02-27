import { Injectable } from '@angular/core';
import { ip } from '../backend-ip';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  username: string;
  constructor(private http: HttpClient) {}

  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    const url = ip + '/check/username';
    return this.http.post(url, obj);
  }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }
  sendOTP(uname: string, mobile: string) {
    const obj = {
      phone: mobile
    };

    const url = ip + '/register/verifyOTP';
    return this.http.post(url, obj);

    // otp as response
  }

  getUserListAndAuthenticationFactorOfClient(clientName: string, clientToken: string, trusted: string, tigerAuth: any) {
    const objToSend = {
      domainName: clientName,
      type: trusted,
      id: clientToken,
      TigerAuth: tigerAuth
    };
    console.log(objToSend);
    return  this.http.post(ip + '/loginUsers' , objToSend);
  }

  getAccessToken(username: string , clientName: string, clientToken: string , trusted: string) {
    const objToSend = {
      id: clientToken,
      domainName: clientName,
      type: trusted,
      username,
      TigerAuth : JSON.parse(localStorage.getItem('TigerAuth'))
    };
    return this.http.post('' , objToSend , );
  }

  sendVideo(Video: string, numBlinks: number) {
    const obj = {
      username: this.username,
      blinks: numBlinks,
      video: Video
    };
    const url = ip + '/check/videoAndBlinks';
    return this.http.post(url, obj);
  }
}
