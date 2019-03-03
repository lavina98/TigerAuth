import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../shared/services/credentials.service';
import {ICredentials} from '../shared/models/user-details.model';
@Component({
  selector: 'app-view-credentials',
  templateUrl: './view-credentials.component.html',
  styleUrls: ['./view-credentials.component.css']
})
export class ViewCredentialsComponent implements OnInit {

  constructor(private credentialService: CredentialsService) { }
  newArr: {username: string, password: string , domainName: string , show: boolean}[] = [];
  temp: ICredentials[] = [{username:'aa', password:'aa', domainName:'aa'},
  {username:'ada', password:'ada', domainName:'ada'},
  {username:'aaddd', password:'ada', domainName:'aad'},
]
  ngOnInit() {
    this.getAllCredentials();
  }
  getAllCredentials() {
    // this.credentialService.getAllCredentials().subscribe(
    //   (res: ICredentials[]) => {
    //       for (let x of res) {
    //         this.newArr.push({...x , show: false});
    //         }
    //   }
    // );
           for (let x of this.temp) {
            this.newArr.push({...x , show: false});
            }
  }

  toggle(c: {username: string, password: string , domainName: string , show: boolean}) {
      c.show = !c.show;
  }

}
