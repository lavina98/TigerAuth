import { Injectable } from '@angular/core';
import { IClient } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {
  constructor(private httpClient: HttpClient) { }

  registerClient(client: IClient) {
    // post request to register client;
  }

  getClientDetails(website: string) {
    // get req send website as params
    // also get users,requests
  }
}
