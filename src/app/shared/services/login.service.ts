import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = '';
  constructor(private http: HttpClient) { }

  validateUsername(uname: string) {
    console.log(uname);
    const obj = {
      username: uname
    };
    return this.http.post(this.url, obj)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

}
