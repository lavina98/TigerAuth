import { Injectable } from '@angular/core';
import { ip } from '../backend-ip';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient) {}

  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    const url = ip + '/check/username';
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
    console.log(objToSend);
    return this.http.post(ip + '/login' , objToSend);

  }
//check user authentication with client authentication requirements
  getResources(headers: HttpHeaders) {
    const objToSend = {};
    return this.http.post(ip + '/login/resource', objToSend, {headers});
  }

}
