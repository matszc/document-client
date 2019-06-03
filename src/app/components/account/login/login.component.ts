import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {LoginData} from '../../../models/login';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public enabledValidators: boolean;
  public loading: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.enabledValidators = false;
    this.loading = false;
  }

  get f(): any { return this.loginForm.controls; }

  public onSubmit(value): void {
    if (!this.loginForm.invalid) {
      this.loading = true;
      const loginData = {
        identifier: value.username,
        password: value.password
      };

      this.authService.login(loginData as LoginData)
        .subscribe(() => {
        this.enabledValidators = true;
        this.router.navigate(['/documents/view']);
      }, () => {
          this.loading = false;
        });
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

}
