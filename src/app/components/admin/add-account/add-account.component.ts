import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  public newUserForm: FormGroup;
  public roles: any[];
  public loading;
  public engableValidators;
  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {
    this.roles = ['admin', 'skarga', 'podanie'];
    this.loading = false;
    this.engableValidators = false;
  }

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      Login: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.minLength(6)),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Role: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    this.engableValidators = true;
    if (this.newUserForm.valid) {
      this.loading = true;
      const newUser = this.newUserForm.value;
      console.log(newUser);
      this.adminService.addUser(newUser).subscribe(() => {
        this.router.navigate(['/admin/users']);
      }, () => this.loading = false);
    }
  }

}
