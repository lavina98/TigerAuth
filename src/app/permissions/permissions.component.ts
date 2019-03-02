import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  constructor() { }

  userPermissions = [
   {client: 'hackerrank' , name: true , dateOfBirth: true , phone: true},
   {client: 'paytm', name: true , dateOfBirth: false , phone: true},
   {client: 'github', name: false , dateOfBirth: true , phone: false},
   {client: 'hotstar', name: false , dateOfBirth: false , phone: true}
  ];

  ngOnInit() {
  }

  selectClient() {
  }

}
