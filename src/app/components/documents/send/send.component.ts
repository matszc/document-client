import { Component, OnInit } from '@angular/core';
import {LoginData} from '../../../models/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  public sendForm: FormGroup;
  public enabledValidators: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  get f(): any { return this.sendForm.controls; }

  public onSubmit(value): void {

    console.log(value);
  }

  ngOnInit() {
    this.sendForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'email': ['', Validators.required],
      'message': ['', Validators.required],
      'filename': ['', Validators.required]
    });

  }

}
