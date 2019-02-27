import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLoginService } from '../shared/services/user-login.service';
import { IClient } from '../shared/models/client.model';
import { ip } from '../shared/backend-ip';
@Component({
  selector: 'app-userlogin-list',
  templateUrl: './userlogin-list.component.html',
  styleUrls: ['./userlogin-list.component.css']
})
export class UserloginListComponent implements OnInit {
  factorLogin: string;
  userList: IUser[];
  clientName: string;
  clientToken: string;
  trusted: string;
  clientRequiresFace: boolean;
  clientRequiresOtp: boolean;
  clientRequiresVoice: boolean;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private userLoginService: UserLoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clientName = this.activatedRoute.snapshot.params.clientName;
    this.clientToken = this.activatedRoute.snapshot.params.clientToken;
    this.trusted = this.activatedRoute.snapshot.params.trusted;
    const tigerAuth = JSON.parse(localStorage.getItem('TigerAuth'));
    this.userLoginService
      .getUserListAndAuthenticationFactorOfClient(
        this.clientName,
        this.clientToken,
        this.trusted,
        tigerAuth
      )
      .subscribe((data: { usersData: IUser[]; clientData: IClient }) => {
        console.log(data);
        this.clientName = data.clientData.domainName;
        this.clientRequiresFace = data.clientData.face;
        this.clientRequiresOtp = data.clientData.otp;
        this.clientRequiresVoice = data.clientData.voice;
        this.userList = data.usersData;
      });
  }

  selectUser(user: IUser) {
    this.userLoginService
      .getAccessToken(
        user.username,
        this.clientName,
        this.clientToken,
        this.trusted
      )
      .subscribe((data: { token: string , response:
        { faceRequiredByClient: boolean, otpRequiredByClient: boolean ,
         voiceRequiredByClient: boolean }}) => {
        console.log(data);
        if ( data.token !== null) {
        const token = 'Bearer ' + data.token;
        const headers = new HttpHeaders({
          Authorization: token
        });
        this.userLoginService.getResources(headers).subscribe( (data) => {
          console.log(data);
        });
      }
       else {
                //route  from here as per requirements
       }
      });
  }

  goToLogin() {
    this.router.navigate(['/login', this.clientName , this.clientToken , this.trusted]);
  }
}
