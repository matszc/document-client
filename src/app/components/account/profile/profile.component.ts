import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {LoginData} from '../../../models/login';
import {PasswordValidator} from '../../../helpers/password-validator';
import {AdminService} from '../../../services/admin.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userInfo;
  public ProfileForm: FormGroup;
  constructor(public authService: AuthService, private formBuilder: FormBuilder, private adminService: AdminService,
              private messageService: MessageService) {
    this.userInfo = authService.currentUserValue;
  }

  get f(): any {
    return this.ProfileForm.controls;
  }
  public onSubmit(): void {
    if (!this.ProfileForm.invalid) {
      const email = this.authService.currentUserValue.email;
      const profile = {
        Login: this.ProfileForm.value.LoginFormControl,
        Email: this.ProfileForm.value.EmailFormControl,
        NewPassword: this.ProfileForm.value.Password,
        Password: this.ProfileForm.value.OldPassword
      };
      this.adminService.updateUser1(email, profile).subscribe(() => {
        this.messageService.add({severity: 'success', summary: 'Info', detail: 'Hasło zmienione'});
        window.location.reload();
      });
    }
  }

  ngOnInit() {
    this.ProfileForm = this.formBuilder.group({
      LoginFormControl: new FormControl(this.authService.currentUserValue.login),
      EmailFormControl: new FormControl(this.authService.currentUserValue.email),
      Password: new FormControl(''),
      RepeatPassword: new FormControl(''),
      OldPassword: new FormControl('')
    }, {validator: PasswordValidator.MatchPassword});
    this.ProfileForm.controls.LoginFormControl.disable();
    this.ProfileForm.controls.EmailFormControl.disable();
  }
}
