import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
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
  public enableValidators: boolean;
  constructor(public authService: AuthService, private formBuilder: FormBuilder, private adminService: AdminService,
              private messageService: MessageService) {
    this.enableValidators = false;
    this.userInfo = authService.currentUserValue;
  }

  get f(): any {
    return this.ProfileForm.controls;
  }
  public onSubmit(): void {
    this.enableValidators = true;
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
    const login = this.authService.currentUserValue ? this.authService.currentUserValue.login : '';
    const email = this.authService.currentUserValue ? this.authService.currentUserValue.email : '';
    this.ProfileForm = this.formBuilder.group({
      LoginFormControl: new FormControl(login),
      EmailFormControl: new FormControl(email),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      RepeatPassword: new FormControl(''),
      OldPassword: new FormControl('', Validators.required)
    }, {validator: PasswordValidator.MatchPassword});
    this.ProfileForm.controls.LoginFormControl.disable();
    this.ProfileForm.controls.EmailFormControl.disable();
  }
}
