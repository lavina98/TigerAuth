import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  clients = [
    {
      ip: '172.158.16.40',
      client: 'www.hackerrank.com',
      time: '4 :08 PM',
      status: 'Active'
    },
    {
      ip: '192.168.15.210',
      client: 'www.github.com',
      time: '8:10 AM',
      status: 'Inactive'
    }
  ];

  ngOnInit() { }

}
