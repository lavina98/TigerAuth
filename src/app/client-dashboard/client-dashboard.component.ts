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
  }

}
