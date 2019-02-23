import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

    public captures: Array<any>;

    public constructor(private userService: UserService, private router: Router, private http: HttpClient) {
        this.captures = [];
    }

    public ngOnInit() {
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

        const img = this.canvas.nativeElement.toDataURL('image/png');

        // console.log(obj);
        // this.userService.setUserImage(img);
        const obj = {
            image: img
        };
        this.http.post('http://172.16.40.53:3000/img', obj).subscribe(
            res => {
                console.log(res);
            }
        );

        // this.router.navigate(['/audio-record']);
    }

}
