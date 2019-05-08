import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userInfo;
  public ProfileForm: FormGroup;
  constructor(public authService: AuthService, private formBuilder: FormBuilder) {
    this.userInfo = authService.currentUserValue;
  }

  get f(): any {
    return this.ProfileForm.controls;
  }
  public onSubmit(): void {
    if (!this.ProfileForm.invalid) {
      const profile = {
        login: this.ProfileForm.value.LoginFormControl,
        email: this.ProfileForm.value.EmailFormControl,
        password: this.ProfileForm.value.PasswordFormControl,
      };
    }
  }

  ngOnInit() {
    this.ProfileForm = this.formBuilder.group({
      LoginFormControl: new FormControl(''),
      EmailFormControl: new FormControl(''),
      PasswordFormControl: new FormControl(''),
    });
  }
}
