import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserRegisterService } from '../shared/services/user-register.service';
import {NavBarService} from '../shared/services/navbarservice';
@Component({
  selector: 'app-face-register',
  templateUrl: './face-register.component.html',
  styleUrls: ['./face-register.component.css']
})
export class FaceRegisterComponent implements OnInit {
  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;

  public captures: Array<any>;

  public constructor(
    private navBarService: NavBarService,
    private userRegisterService: UserRegisterService,
    private router: Router,
    private http: HttpClient,
  ) {
    this.captures = [];
  }

  public ngOnInit() {
    this.navBarService.hide();
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        // console.log(stream);
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    const context = this.canvas.nativeElement
      .getContext('2d')
      .drawImage(this.video.nativeElement, 100, 100, 640, 480);
    // console.log(this.canvas.nativeElement.getContext('2d'));
    this.captures.push(this.canvas.nativeElement.toDataURL('image/png', 1.0));
    // console.log(this.captures.length);
    console.log(this.canvas.nativeElement.toDataURL('image/png'));

    const img = this.canvas.nativeElement.toDataURL('image/png');

    console.log(img);
    this.userRegisterService.setUserImage(img);
    this.router.navigate(['/otp-register']);
  }
}
