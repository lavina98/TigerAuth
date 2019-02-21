import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  static auth: number;
  static username: string;
  faceOpen = false;
  voiceOpen = false;
  otpOpen = false;
  faceValid = false;
  voiceValid = false;
  otpValid = false;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      RedirectComponent.auth = Number(params.auth);
      RedirectComponent.username = params.username;

      console.log(RedirectComponent.auth); // Print the parameter to the console.
      if (RedirectComponent.auth === 2) {
        this.faceOpen = true;
        this.otpOpen = true;
      } else if (RedirectComponent.auth === 3) {
        this.faceOpen = true;
        this.otpOpen = true;
        this.voiceOpen = true;
      }
    });
  }


  ngOnInit() { }

}
