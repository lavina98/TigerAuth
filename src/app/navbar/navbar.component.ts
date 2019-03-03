import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../shared/services/navbarservice';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  constructor(public navBarService: NavBarService, private userService: UserService) { }
  ngOnInit() {
    this.username = this.userService.getUsername();
  }
}
