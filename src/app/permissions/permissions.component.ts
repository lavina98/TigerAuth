import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  constructor() { }

  clientPermissions = [
   {client: 'hackerrank' , permissions: ['username', 'phone']},
   {client: 'paytm', permissions: ['username', 'dateOfBirth']},
   {client: 'github', permissions: ['username', 'dateOfBirth']},
   {client: 'hotstar', permissions: ['username', 'phone', 'dateOfBirth']}
  ];

  ngOnInit() {
  }

  selectClient() {
  }

}
