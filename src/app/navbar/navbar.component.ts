import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../shared/services/navbarservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  constructor(public navBarService: NavBarService) { }
  ngOnInit() {
  }
  
}
