import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usernameValid: boolean;
  registerForm: FormGroup;

  formOK = false;
  faceOK = false;
  voiceOK = false;
  optOK = false;

  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;

  public captures: Array<any>;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = fb.group({
      first_name: this.fb.control('', [Validators.required]),
      last_name: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      mobile: this.fb.control('', [Validators.required]),
      dob: this.fb.control('', [Validators.required]),

    });
  }
  ngOnInit() { }

  verifyUsername() {
    console.log(this.registerForm.value.username);
    const username = this.registerForm.value.username;
    // this.userService.verifyUsername(username).subscribe(
    //   res => {
    //     console.log(res);
    //     if (res.toString() === 'Valid') {
    //       this.usernameValid = true;
    //     } else {
    //       this.usernameValid = false;
    //     }
    //   }
    // );
    if (username === 'a') {
      this.usernameValid = true;
    }
  }

  change() {
    console.log('change');
  }

  submitForm() {
    const obj = this.registerForm.value;
    // this.userService.register(obj).subscribe(
    //   res => {
    //     console.log(res);
    //   }

    // );
    // this.router.navigate(['face-scan']);
    this.initCamera();
    this.formOK = true;

  }

  initCamera() {
    this.captures = [];
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        // console.log(stream);
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 100, 100, 640, 480);
    // console.log(this.canvas.nativeElement.getContext('2d'));
    this.captures.push(this.canvas.nativeElement.toDataURL('image/png', 1.0));
    // console.log(this.captures.length);
    console.log(this.canvas.nativeElement.toDataURL('image/png'));
    const obj = {
      image: this.canvas.nativeElement.toDataURL('image/png')
    };
    // console.log(obj);
  }

}
