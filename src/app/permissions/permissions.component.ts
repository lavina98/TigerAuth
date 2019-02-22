import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  constructor() { }

  clientPermissions = [
   {client: 'hackerrank' , permissions: ['face']},
   {client: 'paytm', permissions: ['face', 'otp', 'voice']},
   {client: 'github', permissions: ['face', 'otp']},
   {client: 'hotstar', permissions: ['face', 'otp']}
  ];

  ngOnInit() {
  }

  selectClient() {
  }

}
