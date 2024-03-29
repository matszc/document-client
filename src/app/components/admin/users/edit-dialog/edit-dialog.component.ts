import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {AdminService} from '../../../../services/admin.service';
import {PasswordValidator} from '../../../../helpers/password-validator';
import {User} from '../../../../models/user';
import {UpdateUser} from '../../../../models/update-user';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit, OnChanges {
  public editUserForm: FormGroup;
  public roles: string[];
  public close = false;
  @Input() targetUser: User;
  @Output() eventClose = new EventEmitter<boolean>();
  public enableValidators: boolean;
  constructor(private adminService: AdminService, private formBuilder: FormBuilder) {
    this.enableValidators = false;
    this.roles = ['admin', 'skarga', 'podanie'];
  }

  ngOnInit() {
    this.editUserForm = this.formBuilder.group({
      loginFormControl: new FormControl('', Validators.required),
      Password: new FormControl('', [Validators.minLength(6), Validators.required]),
      RepeatPassword: new FormControl(''),
      Email: new FormControl('', [Validators.required, Validators.email]),
      roleFormControl: new FormControl('', Validators.required)
    }, {validator: PasswordValidator.MatchPassword});
  }
  ngOnChanges(): void {
    if (this.targetUser) {
      this.editUserForm.get('loginFormControl').setValue(this.targetUser['login']);
      this.editUserForm.get('roleFormControl').setValue(this.targetUser['role_name']);
      this.editUserForm.get('Email').setValue(this.targetUser['email']);
    }
  }
  onSubmit() {
    this.enableValidators = true;
    if (this.editUserForm.valid) {
      const user: UpdateUser = {
        Login: this.editUserForm.value.loginFormControl,
        Password: this.editUserForm.value.Password,
        Role: this.editUserForm.value.roleFormControl,
        Email: this.editUserForm.value.Email
      };
      this.adminService.updateUser(this.targetUser['email'], user).subscribe(() => {
        window.location.reload();
        this.closeDialog();
      });
    }
  }
  closeDialog() {
    this.eventClose.emit(this.close);
  }

}
