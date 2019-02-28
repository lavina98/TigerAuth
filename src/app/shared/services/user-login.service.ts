import { Injectable } from '@angular/core';
import { ip } from '../backend-ip';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { ClientService } from './client.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  username: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private clientService: ClientService
  ) {}

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


  sendOTP() {
    const obj = {
      username: this.username
    };

    const url = ip + '/register/verifyOTP';
    return this.http.post(url, obj);
    // otp as response
  }

  sendVoice(voice: string , localStorageTokens: any) {
    const obj = {
      username: this.username,
      audio: voice,
      localStorageTokens
    };

    const url = ip + '/check/voice';
    return this.http.post(url, obj);
  }
  getUserListAndAuthenticationFactorOfClient(clientName: string, clientToken: string, trusted: string, tigerAuth: any) {
    const objToSend = {
      domainName: clientName,
      type: trusted,
      id: clientToken,
      TigerAuth: tigerAuth
    };
    console.log(objToSend);
    return this.http.post(ip + '/loginUsers', objToSend);
  }

  getAccessId(
    username: string,
    clientName: string,
    clientToken: string,
    trusted: string
  ) {
    const objToSend = {
      id: clientToken,
      domainName: clientName,
      type: trusted,
      username,
      TigerAuth: JSON.parse(localStorage.getItem('TigerAuth'))
    };
    console.log(objToSend);
    return this.http.post(ip + '/login', objToSend);
  }

  redirectUserAsPerAuthentication() {
    const username = this.userService.getUsername();
    const clientDetails = this.clientService.getClientDetails();
    this.getAccessId(
      username,
      clientDetails.domainName,
      clientDetails.id,
      clientDetails.type
    ).subscribe(
      (data: {
        response: {
          faceRequiredByClient: boolean;
          otpRequiredByClient: boolean;
          voiceRequiredByClient: boolean;
        };
        link: string;
      }) => {
        console.log(data);
        if (data.link !== 'self') {
          console.log('redirecting');
          window.open(data.link, '_self');
        } else {
          if (data.response.faceRequiredByClient) {
            this.router.navigate(['/face-login']);
          } else if (data.response.voiceRequiredByClient) {
            this.router.navigate(['/voice-login']);
          } else {
            this.router.navigate(['/otp-login']);
          }
        }
      }
    );
  }

  // check user authentication with client authentication requirements
  // remove it later resource directly sent to 3rd party app
  getResources(headers: HttpHeaders) {
    const objToSend = {};
    return this.http.post(ip + '/login/resource', objToSend, { headers });
  }

  sendVideo(Video: string, numBlinks: number , localStorageTokens: any) {
    const obj = {
      username: this.username,
      blinks: numBlinks,
      video: Video
    };
    const url = ip + '/check/videoAndBlinks';
    return this.http.post(url, obj);
  }


  setOtpToken() {
    const dataToSend = {localStorageTokens: JSON.parse(localStorage.getItem('TigerAuth'))};
    return this.http.post(ip + '/', dataToSend );
  }
}
