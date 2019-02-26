import { Injectable } from '@angular/core';
import { IClient } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) { }

  registerClient(client: IClient) {
    const objToSend = {
      domainName : client.website,
      callBackUrl: client.redirectUrl,
      face: client.faceAuthentication,
      voice: client.voiceAuthentication,
      otp: client.otpAuthentication,
      permissions: {
        name: client.name,
        phone: client.phone,
        dob: client.dateOfBirth,
        img: client.profilePicture,
        audio: false,
        username: true
      }
    };
    console.log(objToSend);
    console.log('sending request');
    return this.http.post('http://192.168.43.124:3000/clientRegister', objToSend , {responseType: 'blob'});
  }

  getClientDetails(website: string) {
    // get req send website as params
    // also get users,requests
  }
}
