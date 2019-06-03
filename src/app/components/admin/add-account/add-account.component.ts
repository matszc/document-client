import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {Router} from '@angular/router';
import {PasswordValidator} from '../../../helpers/password-validator';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  public newUserForm: FormGroup;
  public roles: any[];
  public loading;
  public enableValidators;
  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router,
              private messageService: MessageService) {
    this.roles = ['admin', 'skarga', 'podanie'];
    this.loading = false;
    this.enableValidators = false;
  }

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      Login: new FormControl('', Validators.required),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      RepeatPassword: new FormControl(''),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Role: new FormControl('', Validators.required)
    }, {validator: PasswordValidator.MatchPassword});
  }
  onSubmit() {
    this.enableValidators = true;
    if (this.newUserForm.valid) {
      this.loading = true;
      const newUser = {
        Login: this.newUserForm.value.Login,
        Password: this.newUserForm.value.Password,
        Email: this.newUserForm.value.Email,
        Role: this.newUserForm.value.Role
      };
      this.adminService.addUser(newUser).subscribe(() => {
        this.messageService.add({severity: 'success', summary: 'Info', detail: 'Dodano użytkownika'});
        this.router.navigate(['/admin/users']);
      }, () => this.loading = false);
    }
  }

}
