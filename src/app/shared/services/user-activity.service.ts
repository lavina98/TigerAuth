import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ip } from '../backend-ip';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  constructor(private http: HttpClient) { }

  getAllUserActivity(uname: string) {
    const obj = {
      username: uname
    };
    const url = ip + '/user/activity';
    return this.http.post(url, obj);
  }
}
