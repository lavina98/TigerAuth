import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { UserLoginService } from '../shared/services/user-login.service';
import { ip } from '../shared/backend-ip';
import { UserService } from '../shared/services/user.service';
import { NavBarService } from '../shared/services/navbarservice';

@Component({
  selector: 'app-transition-page',
  templateUrl: './transition-page.component.html',
  styleUrls: ['./transition-page.component.css']
})
export class TransitionPageComponent implements OnInit {
  private clientName: string;
  private clientToken: string;
  private trusted: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cookie: CookieService,
    private http: HttpClient,
    private userLoginService: UserLoginService,
    private router: Router,
    private userService: UserService,
    private navBarService: NavBarService
  ) {}

  ngOnInit() {
    this.navBarService.hide();
    this.clientName = this.activatedRoute.snapshot.params.clientName;
    this.clientToken = this.activatedRoute.snapshot.params.clientToken;
    this.trusted = this.activatedRoute.snapshot.params.trusted;
    this.userService.setLocalStorage().subscribe((data1: {data: any}) => {
      console.log(data1);
      localStorage.setItem('TigerAuth', JSON.stringify(data1.data));
    });
    const localStorageTigerAuth = JSON.parse(localStorage.getItem('TigerAuth'));
    this.userService
      .sendLocalStorageDataToServer(
        this.clientName,
        this.clientToken,
        this.trusted,
        localStorageTigerAuth
      )
      .subscribe(
        (data: { link: string; domainName: string; id: string; type: string }) => {
          console.log('response from server for cookie');
          this.router.navigate(['/' + data.link , data.domainName , data.id , data.type]);
        }
      );
  }

  clickHere() {
    this.router.navigate(['/add-client']);
  }
}
