import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaceValidateService {

  constructor(private http: HttpClient) { }

  validateFace_register(obj: any) {
    return this.http.post('', obj);
  }

  validateFace_login() {
  }
}


