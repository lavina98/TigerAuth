import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  NgZone
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as RecordRTC from 'recordrtc';
import { ip } from '../shared/backend-ip';
import { Router } from '@angular/router';
import { UserLoginService } from '../shared/services/user-login.service';
import { UserService } from '../shared/services/user.service';
import { NavBarService } from '../shared/services/navbarservice';
// const changeBrightness = require('node-brightness');
import * as changeBrightness from '../../../node_modules/node-brightness';

@Component({
  selector: 'app-face-login',
  templateUrl: './face-login.component.html',
  styleUrls: ['./face-login.component.css']
})
export class FaceLoginComponent implements OnInit, AfterViewInit {

  @ViewChild('video')
  public video: ElementRef;
  private stream: MediaStream;
  private recordRTC: any;
  recordingStarted: boolean;
  randomBlinks: number;
  username: string;
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private userLoginService: UserLoginService,
    private ngZone: NgZone,
    private router: Router,
    private navBarService: NavBarService
  ) { }

  ngOnInit() {
    // this.navBarService.hide();
    // this.username = this.userService.getUsername();
    // if (this.username === undefined) {
    //   this.router.navigate(['/']);
    // }
    changeBrightness(50);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        // console.log(stream);
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
    this.recordingStarted = false;
    this.randomBlinks = Math.floor(Math.random() * 4) + 3;
    console.log(this.randomBlinks);
  }

  ngAfterViewInit(): void {
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  recordingStart() {
    this.recordingStarted = true;
    // navigator web api with which you can access media controls on
    // user system
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  recordingStop() {
    // depending on 2fa / 3 fa navigate
    this.recordRTC.stopRecording(this.processVideo.bind(this));
    const stream = this.stream;
    // stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
    // this.router.navigate(['audio-record']);
  }

  errorCallback() {
    console.log('error');
  }

  successCallback(stream: MediaStream) {
    const options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      // audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000
      // bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    const video: HTMLVideoElement = this.video.nativeElement;
    // video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  toggleControls() {
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  processVideo(audioVideoWebMURL) {
    const video: HTMLVideoElement = this.video.nativeElement;
    // console.log
    const recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    const recordedBlob = recordRTC.getBlob();
    console.log(recordedBlob);

    recordRTC.getDataURL(dataURL => {
      console.log(dataURL);
      this.sendRequest(dataURL);
    });
  }

  sendRequest(dataURL) {
    console.log('sending req');
    const localStorageTokens = JSON.parse(localStorage.getItem('TigerAuth'));
    // send local storage content to server modifies and you store it back to the local storage
    this.userLoginService
      .sendVideo(dataURL, this.randomBlinks, localStorageTokens)
      .subscribe((res: { message: string; TigerAuth: any }) => {
        console.log(res);

        if (res.message === 'valid') {
          console.log('Face Verified');
          localStorage.setItem('TigerAuth', JSON.stringify(res.TigerAuth));
          // this.userLoginService.redirectUserAsPerAuthentication();
          // this.router.navigate(['/voice-login']);
          this.ngZone.run(() => {
            this.router.navigate(['/voice-login']);
          });
        } else {
          alert('Please try again');
          localStorage.setItem('TigerAuth', JSON.stringify(res.TigerAuth));
          this.router.navigate(['/face-login']);
        }
      });
  }
}
