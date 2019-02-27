import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLoginService } from '../shared/services/user-login.service';
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
      (data) =>{
          console.log(data);
      }
    )
  }

  selectUser() {
  }
  
}
