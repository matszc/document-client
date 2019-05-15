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
  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {
    this.roles = ['admin', 'registered'];
  }

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      Login: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.minLength(6)),
      Email: new FormControl('', Validators.required),
      Role: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.value;
      console.log(newUser);
      this.adminService.addUser(newUser).subscribe(() => {
        this.router.navigate(['/admin/users']);
      });
    }
  }

}
