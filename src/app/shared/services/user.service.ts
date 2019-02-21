import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  verifyUsername(uname: string) {
    const obj = {
      username: uname
    };
    return this.http.post('', obj);
  }

  register(obj: any) {
    return this.http.post('', obj);
  }
}
