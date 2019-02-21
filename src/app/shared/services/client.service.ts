import { Injectable } from '@angular/core';
import { IClient } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  static client: IClient;
  constructor() { }

  login() {}
}
