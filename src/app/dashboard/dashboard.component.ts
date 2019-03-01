import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserActivityService } from '../shared/services/user-activity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private userActivityService: UserActivityService) { }

  clients = [
    {
      ip: '172.158.16.40',
      client: 'www.hackerrank.com',
      time: '4 :08 PM',
      device: 'Trusted',
      // status: 'Active'
    },
    {
      ip: '172.158.16.40',
      client: 'www.hackerrank.com',
      time: '4 :08 PM',
      device: 'Trusted',
      status: 'Active'
    },
    {
      ip: '172.158.16.40',
      client: 'www.hackerrank.com',
      time: '4 :08 PM',
      device: 'Trusted',
      status: 'Active'
    },
    {
      ip: '192.168.15.210',
      client: 'www.github.com',
      time: '8:10 AM',
      device: 'Unrusted',
      // status: 'Inactive'
    }
  ];

  ngOnInit() {
    // this.username = this.userService.getUsername();
    // this.userActivityService.getAllUserActivity(this.username).subscribe(
    //   res => {
    //     console.log(res);
    //   }
    // );
  }

}
