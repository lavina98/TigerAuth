import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  selectClient: FormGroup;
  clients = ['site1', 'site2', 'site3'];
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    // get client list from api
    // client =
    this.selectClient = this.fb.group({
      clientName: this.fb.control('')
    });
    // console.log(this.getCorrectTime(1551323323));
    const date = new Date(1551323323000).toString().split(' ');
    console.log(date);
    console.log(new Date(1551323323000));
  }

  getCorrectTime(unix: number) {
    const a = new Date(unix * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
    // return Date.prototype.toISOString();
    // console.log(timeConverter(0));
  }
}
