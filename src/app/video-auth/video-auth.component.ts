import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as RecordRTC from "recordrtc";
@Component({
  selector: "app-video-auth",
  templateUrl: "./video-auth.component.html",
  styleUrls: ["./video-auth.component.css"]
})
export class VideoAuthComponent implements OnInit, AfterViewInit {
  @ViewChild('video')
  public video: ElementRef;
  private stream: MediaStream;
  private recordRTC: any;
  recordingStarted: boolean;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        // console.log(stream);
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
    this.recordingStarted = false;
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
    video.src = window.URL.createObjectURL(stream);
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

    recordRTC.getDataURL((dataURL) => {
      console.log(dataURL);
      this.sendRequest(dataURL);
          // console.log('sending req');
          // const data = {
          //   video: dataURL
          // };
          // const Headers = {
          //   'Content-Type': 'application/json',

          // };
          // this.http.post('http://192.168.43.57:3000/video', data).subscribe( (res) => {
          //       console.log(res);
          // });
    });
  }
  sendRequest(dataURL) {
    console.log('sending req');
    const data = {
      video: dataURL
    };
    const Headers = {
      'Content-Type': 'application/json'
    };
    this.http.post('http://192.168.43.57:3000/video', data).subscribe(res => {
      console.log(res);
    });
  }
}
