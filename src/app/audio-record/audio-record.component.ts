import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-audio-record',
  templateUrl: './audio-record.component.html',
  styleUrls: ['./audio-record.component.css']
})
export class AudioRecordComponent implements OnInit {


  blob: Blob;
  private record;
  private recording = false;
  private url;
  private error;
  constructor(
    private domSanitizer: DomSanitizer,
    private router: Router,
    private userService: UserService,
    private http: HttpClient) { }

  ngOnInit() { }

  sanitize(url: string) {
    // console.log(this.domSanitizer.bypassSecurityTrustUrl(url));
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
  successCallback(stream) {
    const options = {
      mimeType: 'audio/wav',
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

  processRecording(blob) {
    // console.log(blob);
    // console.log(this.blobToFile(blob));
    // const obj = {
    //   audio: blob
    // };
    console.log(blob);
    console.log('before http');
    this.http.post('http://192.168.43.57:3000/audio', blob).subscribe(
      res => {
        console.log('response:');
        console.log(res);
      }
    );
    this.url = URL.createObjectURL(blob);
    // this.blob = blob;
    // console.log(blob);
    // console.log(this.url);
    // this.userService.setUserAudio(this.blob);
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  blobToFile(blob: Blob) {
    const b: any = blob;
    // b.blob = blob;
    b.lastModifiedDate = new Date();
    b.name = 'front-end.wav';

    return b as File;
    // const file = new File([blob], 'audio.wav', { type: 'audio/wav', lastModified: Date.now() });
    // console.log(file);
    // // return file;
    // const obj = {
    //   audio: file
    // };

    // console.log(blob);
    // this.http.post('http://172.16.40.53:3000/audio', blob).subscribe(
    //   res => {
    //     console.log('response:');
    //     console.log(res);
    //   }
    // );
  }

}
