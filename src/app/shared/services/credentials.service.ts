import { Injectable } from '@angular/core';
import { ip } from '../backend-ip';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { ClientService } from './client.service';
import { Router } from '@angular/router';
import { ICredentials } from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private clientService: ClientService,
  ) {}

  addcredentials(credential: ICredentials) {
    const url = ip + '';
    return this.http.post(url, credential);
  }

  getAllCredentials() {
    const url = ip + '';
    const obj = {username: this.userService.getUsername()};
    return this.http.post(url, obj);
  }
}
