import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegisterService } from '../shared/services/user-register.service';
import { IResponse } from '../shared/models/single-word-response.model';
import { NavBarService } from '../shared/services/navbarservice';

@Component({
  selector: 'app-voice-register',
  templateUrl: './voice-register.component.html',
  styleUrls: ['./voice-register.component.css']
})
export class VoiceRegisterComponent implements OnInit {
  static str: string;
  is5TimesDone = false;
  sentences = [
    'The waves were crashing on the shore; it was a lovely sight.',
    'Joe made the sugar cookies; Susan decorated them.',
    'I think I will buy the red car, or I will lease the blue one.',
    'I love eating toasted cheese and tuna sandwiches.',
    'Writing a list of random sentences is harder than I initially thought it would be.'
  ];
  sentence = this.sentences[0];
  // @ViewChild('video')
  // public video: ElementRef;

  // @ViewChild('audio')
  // public audio: ElementRef;

  // blob: Blob;
  count = 0;
  private record;
  private recording = false;
  private url;
  audios: any;
  private error;
  constructor(
    private domSanitizer: DomSanitizer,
    private router: Router,
    private userRegisterService: UserRegisterService,
    private http: HttpClient,
    private navBarService: NavBarService) {
    this.audios = [];
  }

  ngOnInit() {
    this.navBarService.hide();
   }

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
    // console.log(this);
  }

  async processRecording(blob: Blob) {

    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const abcd = reader.result;
      // console.log(abcd);
      VoiceRegisterComponent.str = abcd.toString();
      // console.log(VoiceRegisterComponent.str);
      this.postData();
    };



    // this.url = URL.createObjectURL(blob);

  }

  postData() {
    if (this.count < 5) {
      const audio = VoiceRegisterComponent.str;
      this.audios.push(audio);
      console.log(this.count);
      this.count++;
      this.sentence = this.sentences[this.count];
      if (this.count > 4) {
        this.is5TimesDone = true;
        this.sendReq();
      }
    } else {
      // send list users page
    }



  }

  sendReq() {
    this.userRegisterService.setUserAudio(this.audios);
    this.userRegisterService.submit().subscribe(
      (res: {message: IResponse, TigerAuth: any}) => {
        if(res.message.toString() === 'valid') {
          console.log(res.message);
        console.log(res);
        localStorage.setItem('TigerAuth', JSON.stringify(res.TigerAuth));

        // this.userRegisterService

        this.router.navigate(['/dashboard']);
        } else {
          alert('Register Failed. Please try again');
        }
        
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
