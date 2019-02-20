import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  constructor() { }

  clientPermissions = {
   hackerrank: ['face'],
   paytm: ['face', 'otp', 'voice'],
   github: ['face', 'otp'],
   hotstar: ['face', 'otp']
  };

  perm = [
    {
      clientName: 'Hackerrank',
      face: 'y',
      otp: 'n',
      voice: 'n',
    },
    {
      clientName: 'PayTM',
      face: 'y',
      otp: 'y',
      voice: 'y',
    },
    {
      clientName: 'GitHub',
      face: 'y',
      otp: 'y',
      voice: 'n',
    }
  ];
  ngOnInit() {
  }

  selectClient() {
    console.log('selected');
  }

}
