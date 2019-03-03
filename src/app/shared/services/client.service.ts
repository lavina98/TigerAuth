import { Injectable } from '@angular/core';
import { IClientDetails } from '../models/client.model';
import { HttpClient } from '@angular/common/http';
import { ip } from '../backend-ip';

@Injectable()
export class ClientService {
  public clientDetails: IClientDetails;
  constructor(private http: HttpClient) { }

  registerClient(client) {
    const objToSend = {
      domainName: client.website,
      callbackUrl: client.redirectUrl,
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
    return this.http.post(ip + '/clientRegister', objToSend, { responseType: 'blob' });
  }

  getClientDetails(): IClientDetails {
    return this.clientDetails;
  }

  setClientDetails(clientDetails: IClientDetails) {
    this.clientDetails = clientDetails;
  }

  getActivityOfClient() {

    const url = ip + '/activity/getStats';
    // return this.http.post(url, );
  }
}
