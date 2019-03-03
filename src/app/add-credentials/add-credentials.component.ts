import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
// import { UserLoginService } from '../shared/services/user-login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ip } from '../../app/shared/backend-ip';
import { CookieService } from 'ngx-cookie-service';
import { IResponse } from '../shared/models/single-word-response.model';
import { NavBarService } from '../shared/services/navbarservice';
import { CredentialsService } from '../shared/services/credentials.service';

@Component({
  selector: 'app-add-credentials',
  templateUrl: './add-credentials.component.html',
  styleUrls: ['./add-credentials.component.css']
})
export class AddCredentialsComponent implements OnInit {

  addCredentialsForm: FormGroup;
  // URL: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private userLoginService: UserLoginService,
    private credentialsService: CredentialsService,
    private userService: UserService,
    private http: HttpClient,
    private cookie: CookieService,
    private navBarService: NavBarService
  ) {
    this.addCredentialsForm = fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      domainName: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit() {
    // this.navBarService.hide();
    this.userService.setLocalStorage().subscribe((data1: { data: any }) => {
      console.log(data1);
      localStorage.setItem('TigerAuth', JSON.stringify(data1.data));
    });
  }

  insertCredentials() {
    const method = 'register';
    const value = this.addCredentialsForm.value;
    this.credentialsService.addcredentials(value).subscribe(
      (res: IResponse) => {
        console.log(res);
        if (res.message === 'valid') {
          this.router.navigate(['/dashboard']);
        } else if (res.message === 'invalid') {
          this.router.navigate(['/login']);
        } else {
          alert('Please Try again');

        }
      }
    );
  }

  redirect() {
    this.router.navigate(['/add-credential']);
  }
}

