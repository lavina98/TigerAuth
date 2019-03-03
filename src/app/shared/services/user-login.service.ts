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
  faceRequiredByClient = false;
  voiceRequiredByClient = false;
  otpRequiredByClient = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private clientService: ClientService
  ) { }

  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    const url = ip + '/check/username';
    return this.http.post(url, obj);
  }

  // setUsername(username: string) {
  //   this.username = username;
  // }

  // getUsername() {
  //   return this.username;
  // }

  sendOTP() {
    const obj = {
      username: this.userService.getUsername()
      // username: 'mihir_test'
    };

    const url = ip + '/check/verifyOTP';
    return this.http.post(url, obj);
    // otp as response
  }

  sendVoice(voice: string, localStorageTokens: any, sentence: string) {
    const obj = {
      username: this.userService.getUsername(),
      // username: 'mihir_test',
      audio: voice,
      text: sentence,
      TigerAuth: localStorageTokens
    };

    const url = ip + '/check/voice';
    return this.http.post(url, obj);
  }

  getUserListAndAuthenticationFactorOfClient(
    clientName: string,
    clientToken: string,
    trusted: string,
    tigerAuth: any
  ) {
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
      // username: 'mihir_test',
      username: this.userService.getUsername(),
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
          console.log(data.link);
          window.open(data.link, '_self');
        } else {
          if (data.response.faceRequiredByClient) {
            this.router.navigate(['/face-login']);
          } else if (data.response.voiceRequiredByClient) {
            this.router.navigate(['/voice-login']);
          } else if (data.response.otpRequiredByClient) {
            this.router.navigate(['/otp-login']);
          }
          // if () {

          // }
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

  sendVideo(Video: string, numBlinks: number, localStorageTokens: any) {
    const obj = {
      // username: 'mihir_test',
      username: this.userService.getUsername(),
      blinks: numBlinks,
      video: Video,
      TigerAuth: localStorageTokens
    };
    const url = ip + '/check/videoAndBlinks';
    return this.http.post(url, obj);
  }

  setOtpToken() {
    const dataToSend = {
      username: this.userService.getUsername(),
      // username: 'mihir_test',
      TigerAuth: JSON.parse(localStorage.getItem('TigerAuth'))
    };
    return this.http.post(ip + '/check/otpToken', dataToSend);
  }

  getUserDetails(id: string) {
     // add tiger auth secret key here
     const objToSend = {
       id,
       // add domain name of tiger auth here
       domainName: 'www.TigerAuth.com'
     };
     const headers = new HttpHeaders({
       'Content-Type': 'application/json',
      // add secret key of Tiger Auth
      Authorization: 'Bearer'
     });
     return this.http.post(ip + '/login/resource', objToSend, {headers});
  }
}
