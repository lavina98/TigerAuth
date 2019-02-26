import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clientName = this.activatedRoute.snapshot.params.clientName;
    this.clientToken = this.activatedRoute.snapshot.params.clientToken;
    this.trusted = this.activatedRoute.snapshot.params.trusted;
    console.log(this.clientName + ' ' + this.clientToken);

    // const data = this.userService.getUserListAndFactorAuth().subscribe(
    //   (data) =>{
    //       this.factorLogin = data.factorLogin;
    //       this.userList = data.userList;
    //   }
    // )
    // this.userService.getUserListAndFactorAuth(this.client);
  }

  selectUser() {
  }
  
}
