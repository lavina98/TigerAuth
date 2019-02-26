import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
  // AfterViewInit
} from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserRegisterService } from '../shared/services/user-register.service';
@Component({
  selector: 'app-face-scan',
  templateUrl: './face-scan.component.html',
  styleUrls: ['./face-scan.component.css']
})
export class FaceScanComponent implements OnInit {
  @ViewChild('video')
  public video: ElementRef;
  @ViewChild('canvas')
  public canvas: ElementRef;
  username: string;
  public captures: Array<any>;
  public constructor(
    private userService: UserService,
    private userRegisterService: UserRegisterService,
    private router: Router,
    private http: HttpClient
  ) {
    this.captures = [];
    // this.username = this.userService.getUsername();
    // if (this.username === undefined) {
    //   this.router.navigate(['/']);
    // }
  }

  public ngOnInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    const context = this.canvas.nativeElement
      .getContext('2d')
      .drawImage(this.video.nativeElement, 100, 100, 640, 480);
    const context1 = this.canvas.nativeElement.getContext('2d');

    console.log(context1);
    this.captures.push(this.canvas.nativeElement.toDataURL('image/png', 1.0));
    // console.log(this.canvas.nativeElement.toDataURL('image/png'));

    const img = this.canvas.nativeElement.toDataURL('image/png');

    const obj = {
      image: img
    };

    this.userRegisterService.setUserImage(img);
    this.router.navigate(['/otp']);
  }

}
