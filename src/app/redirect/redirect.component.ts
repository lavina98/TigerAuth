import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserLoginService } from '../shared/services/user-login.service';
import { IUserDetails } from '../shared/models/user-details.model';
import { UserService } from '../shared/services/user.service';
import { NavBarService } from '../shared/services/navbarservice';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userLoginService: UserLoginService,
    private userService: UserService,
    private navBarService: NavBarService
  ) {}

  ngOnInit() {
    this.navBarService.hide();
    this.id = this.activatedRoute.snapshot.params.tigerAuthId;
    this.userLoginService
      .getUserDetails(this.id)
      .subscribe((data: IUserDetails) => {
        this.userService.setUserData(data);
        this.userService.setLoginStatus('Valid');
        this.userService.setUsername(data.username);
      });
  }
}
