import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static username: string;

  constructor(private http: HttpClient) { }

  setUsername(username: string) {
    UserService.username = username;
  }

  getUsername() {
    if (UserService.username !== undefined) {
      return UserService.username;
    } else {
      return undefined;
    }
  }

  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    return this.http.post('', obj);
  }

  verifyOtp() {
    const obj = {};
    const url = '';
    return this.http.post(url, obj);
  }

  register(obj: any) {
    return this.http.post('', obj);
  }


}
