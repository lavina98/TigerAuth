import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-permissions',
  templateUrl: './client-permissions.component.html',
  styleUrls: ['./client-permissions.component.css']
})
export class ClientPermissionsComponent implements OnInit {
  face = 'y';
  otp = 'y';
  voice = 'y';
  constructor() { }

  ngOnInit() {
  }

}
