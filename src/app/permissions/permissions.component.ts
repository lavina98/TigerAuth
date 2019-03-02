import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../shared/services/navbarservice';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  constructor(private navBarService: NavBarService) { }

  userPermissions = [
   {client: 'hackerrank' , name: true , dateOfBirth: true , phone: true},
   {client: 'paytm', name: true , dateOfBirth: false , phone: true},
   {client: 'github', name: false , dateOfBirth: true , phone: false},
   {client: 'hotstar', name: false , dateOfBirth: false , phone: true}
  ];

  ngOnInit() {
      this.navBarService.show();
  }

  selectClient() {
  }

}
