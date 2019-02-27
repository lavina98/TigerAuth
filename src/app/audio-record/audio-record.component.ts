import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';
// import * as b64 from 'base-64';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegisterService } from '../shared/services/user-register.service';
import { IResponse } from '../shared/models/single-word-response.model';

@Component({
  selector: 'app-audio-record',
  templateUrl: './audio-record.component.html',
  styleUrls: ['./audio-record.component.css']
})
export class AudioRecordComponent implements OnInit {
  static str: string;
  // @ViewChild('video')
  // public video: ElementRef;

  // @ViewChild('audio')
  // public audio: ElementRef;
  // blob: Blob;
  private record;
  private recording = false;
  private url;
  private error;
  username: string;
  constructor(
    private domSanitizer: DomSanitizer,
    private router: Router,
    private userService: UserService,
    private userRegisterService: UserRegisterService,
    private http: HttpClient
  ) {
    // this.username = this.userService.getUsername();
    // if (this.username === undefined) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() { }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  initiateRecording() {

    this.recording = true;
    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
   * Will be called automatically.
   */
  successCallback(stream: MediaStream) {
    const options = {
      mimeType: 'audio/wav',
      type: 'audio',
      recorderType: 'StereoAudioRecorder',
      numberOfAudioChannels: 1
    };

    const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
    console.log(this);
  }

  async processRecording(blob: Blob) {

    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const abcd = reader.result;
      console.log(abcd);
      AudioRecordComponent.str = abcd.toString();
      console.log(AudioRecordComponent.str);
      this.postData();
    };



    // this.url = URL.createObjectURL(blob);

  }

  postData() {
    const obj = {
      audio: AudioRecordComponent.str
    };
    this.userRegisterService.setUserAudio(AudioRecordComponent.str);
    this.userRegisterService.submit().subscribe(
      (res: IResponse) => {
        console.log(res.message);
      }
    );
  }

  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

}
