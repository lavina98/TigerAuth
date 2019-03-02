import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { UserLoginService } from '../shared/services/user-login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ip } from '../../app/shared/backend-ip';
import { CookieService } from 'ngx-cookie-service';
import { IResponse } from '../shared/models/single-word-response.model';
import { NavBarService } from '../shared/services/navbarservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  clientName: string;
  clientToken: string;
  trusted: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userLoginService: UserLoginService,
    private userService: UserService,
    private http: HttpClient,
    private cookie: CookieService,
    private navBarService: NavBarService
  ) {
    this.loginForm = fb.group({
      username: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit() {
    // this.clientName = this.activatedRoute.snapshot.params.clientName;
    // this.clientToken = this.activatedRoute.snapshot.params.clientToken;
    // this.trusted = this.activatedRoute.snapshot.params.trusted;
    // const tigerAuth = JSON.parse(localStorage.getItem('TigerAuth'));
    // this.userLoginService.
    // getUserListAndAuthenticationFactorOfClient(this.clientName, this.clientToken, this.trusted, tigerAuth).subscribe(
    //   (data) =>{
    //       console.log(data);
    //   }
    // );
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //   'Access-Control-Allow-Credentials': 'true',
    //   'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    // });
    // this.http.post('http://localhost:5000/cookies', {headers , withCredentials: true}).subscribe(
    //   (data) => console.log(data)
    // );
    // console.log(this.clientName + ' ' + this.clientToken + ' ' + this.trusted);
    // this.http.get(ip + '/loginUsers/setCookie').subscribe( (data) => {
    //   console.log(data);
    //   this.userService
    //   .getUserListAndFactorAuth(this.clientName, this.clientToken, this.trusted)
    //   .subscribe(data1 => {
    //     console.log(data1);
    //   });
    // });
    this.navBarService.hide();
    this.userService.setLocalStorage().subscribe((data1: {data: any}) => {
      console.log(data1);
      localStorage.setItem('TigerAuth', JSON.stringify(data1.data));
    });
  }

  checkUsername() {
    console.log(this.loginForm.value);
    const username = this.loginForm.value.username;
    this.userLoginService.verifyUsername(username).subscribe(
      (res: IResponse) => {
        console.log(res);
        if (res.message.toString() === 'valid') {
          console.log(res);
          this.userLoginService.setUsername(username);
          this.router.navigate(['/face-login']);
          console.log('Here');
        } else {
          alert('Invalid Username');
        }
      }
    );
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
