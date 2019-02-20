import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validateClient() {
    // req to backend
    this.router.navigate(['/client-dashboard']);
  }
}
