import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router,
              public authService: AuthService,
              private formBuilder: FormBuilder) { }

  public redirect(loc: string): void {
    this.router.navigate([loc]);
  }

  ngOnInit() {

  }


}
