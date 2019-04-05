import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {LoginData} from '../../../models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public enabledValidators: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.enabledValidators = false;
  }

  get f(): any { return this.loginForm.controls; }

  onSubmit(value) {
    this.enabledValidators = true;

    if (!this.loginForm.invalid) {
      const loginData = {
        login: value.username,
        password: value.password
      };

      console.log(loginData);
      this.authService.login(loginData as LoginData).subscribe(() => console.log('done'));
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });



/*    console.log(this.f.username.errors);*/
  }




}
