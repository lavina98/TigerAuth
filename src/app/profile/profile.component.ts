import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { NavBarService } from '../shared/services/navbarservice';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public enable = false;
  public buttonValue = 'Edit';
  public updateProfileForm: FormGroup;
  user = {
    username: 'mihirnd',
    first_name: 'Mihir',
    last_name: 'Deodhar',
    email: 'mihirnd@gmail.com',
    mobile: '8451885129',
    dob: '11-11-1998'
  };
  constructor(private fb: FormBuilder, private navBarService: NavBarService, private userService: UserService) {
    this.updateProfileForm = fb.group({
      username: this.fb.control({ value: '', disabled: true }, [Validators.required]),
      first_name: this.fb.control({ value: '', disabled: true }, [Validators.required]),
      last_name: this.fb.control({ value: '', disabled: true }, [Validators.required]),
      mobile: this.fb.control({ value: '', disabled: true }, [Validators.required]),
      email: this.fb.control({ value: '', disabled: true }, [Validators.required]),
      dob: this.fb.control({ value: '', disabled: true }, [Validators.required])
    });
  }

  ngOnInit() {
    this.navBarService.show();
    this.userService.getUserProfile().subscribe(
      res => {
        console.log(res);
      }
    );
  }
  enableEdit() {
    this.enable = !this.enable;
    if (this.enable) {
      this.updateProfileForm.controls.username.enable();
      this.updateProfileForm.controls.first_name.enable();
      this.updateProfileForm.controls.last_name.enable();
      this.updateProfileForm.controls.mobile.enable();
      this.updateProfileForm.controls.email.enable();
      this.updateProfileForm.controls.dob.enable();
      this.buttonValue = 'Save';
    } else {
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
