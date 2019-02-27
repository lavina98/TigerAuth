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
  buttonValue = 'Edit';
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
      username: this.fb.control({ value:'',disabled: true} ,[Validators.required]),
      first_name: this.fb.control({ value:'',disabled: true} , [Validators.required]),
      last_name: this.fb.control({ value:'',disabled: true} , [Validators.required]),
      mobile: this.fb.control({ value:'',disabled: true} , [Validators.required]),
      email: this.fb.control({ value:'',disabled: true} , [Validators.required]),
      dob: this.fb.control({ value:'',disabled: true} , [Validators.required])
    });
  }

  ngOnInit() {
    this.enable = false;
  }
  enableEdit() {
   this.enable =!this.enable;
   if(this.enable) {
     this.updateProfileForm.controls.username.enable();
     this.updateProfileForm.controls.first_name.enable();
     this.updateProfileForm.controls.last_name.enable();
     this.updateProfileForm.controls.mobile.enable();
     this.updateProfileForm.controls.email.enable();
     this.updateProfileForm.controls.dob.enable();
     this.buttonValue = 'Save';
   }
   else {
    this.updateProfileForm.controls.username.disable();
    this.updateProfileForm.controls.first_name.disable();
    this.updateProfileForm.controls.last_name.disable();
    this.updateProfileForm.controls.mobile.disable();
    this.updateProfileForm.controls.email.disable();
    this.updateProfileForm.controls.dob.disable();
    this.buttonValue = 'Edit';
   }
  }


}
