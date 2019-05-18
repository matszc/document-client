import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {AdminService} from '../../../../services/admin.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit, OnChanges {
  public editUserForm: FormGroup;
  public roles;
  public close = false;
  @Input() oldLogin;
  @Input() email;
  @Output() eventClose = new EventEmitter<boolean>();
  constructor(private adminService: AdminService, private formBuilder: FormBuilder) {
    this.roles = ['admin', 'registered'];
    this.editUserForm = this.formBuilder.group({
      loginFormControl: new FormControl('', Validators.required),
      passwordFormControl: new FormControl('', Validators.minLength(6)),
      re_passwordFormControl: new FormControl(''),
      roleFormControl: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.editUserForm.get('loginFormControl').setValue(this.oldLogin);
  }
  onSubmit() {
    if (this.editUserForm.valid) {
      const user = {
        Login: this.editUserForm.value.loginFormControl,
        NewPassword: this.editUserForm.value.passwordFormControl,
        Role: this.editUserForm.value.roleFormControl,
        // Password: ''
    };
      this.adminService.updateUser(this.email, user).subscribe(() => {
        console.log('dzila');
      });
      this.closeDialog();
    }
  }
  closeDialog() {
    this.eventClose.emit(this.close);
  }

}
