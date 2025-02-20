import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  isLogin: boolean;
  constructor(private userService: UserService) {}
  ngOnInit() {
    if (this.userService.getLoginStatus() === 'Invalid') {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
    this.isLogin = true;
  }
}
