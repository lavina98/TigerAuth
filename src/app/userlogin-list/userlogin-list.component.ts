import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLoginService } from '../shared/services/user-login.service';
import { IClient } from '../shared/models/client.model';
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
    this.userLoginService. getUserListAndAuthenticationFactorOfClient(this.clientName, this.clientToken, this.trusted, tigerAuth).subscribe(
      (data: {usersData: IUser[] , clientData: IClient}) => {
          console.log(data);
          this.clientName = data.clientData.domainName;
          this.clientRequiresFace = data.clientData.face;
          this.clientRequiresOtp = data.clientData.otp;
          this.clientRequiresVoice = data.clientData.voice;
          this.userList = data.usersData;

      }
    );
  }

  selectUser(user: IUser) {
      this.userLoginService.getAccessToken(user.username,this.clientName, this.clientToken, this.trusted).subscribe((data)=>{
        console.log(data);
      });
  }
}
