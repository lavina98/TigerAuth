import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(private userService: UserService, private router: Router, private http: HttpClient) {
    // this.username = this.userService.getUsername();
    // if (this.username === undefined) {
    //   this.router.navigate(['/']);
    // }
  }

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
    this.username = this.userService.getUsername();
    this.http.post('http://192.168.43.57:3000/user/activity', {username: 'varsha'}).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
