import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  enable = false;
  private updateProfileForm: FormGroup;
  user = {
    username: 'mihirnd',
    first_name: 'Mihir',
    last_name: 'Deodhar',
    email: 'mihirnd@gmail.com',
    mobile: '8451885129',
    dob: '11-11-1998'
  };
  constructor(private fb: FormBuilder) {
    this.updateProfileForm = fb.group({
      username: this.fb.control('', [Validators.required]),
      first_name: this.fb.control('', [Validators.required]),
      last_name: this.fb.control('', [Validators.required]),
      mobile: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      dob: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit() {
  }
  enableEdit() {
    console.log(this.updateProfileForm.value);
    this.enable = true;
  }


}
