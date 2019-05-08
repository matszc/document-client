import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DocumentService} from '../../../services/document.service';

@Component({
    selector: 'app-for-not-logged-in',
    templateUrl: './for-not-logged-in.component.html',
    styleUrls: ['./for-not-logged-in.component.scss']
})
export class ForNotLoggedInComponent implements OnInit {

    public sendForm: FormGroup;
    public tokenForm: FormGroup;
    public enabledValidatorsEmail: boolean;
    public enabledValidatorsToken: boolean;

    constructor(private router: Router,
                public authService: AuthService,
                private formBuilder: FormBuilder,
                private documentService: DocumentService) {
        this.enabledValidatorsEmail = false;
        this.enabledValidatorsToken = false;
    }

    get f(): any {
        return this.sendForm.controls;
    }

    get t(): any {
        return this.tokenForm.controls;
    }

    onSubmitEmail(value) {
        this.enabledValidatorsEmail = true;
        if (!this.sendForm.invalid) {
            this.documentService.notLoggedInUserEmail = this.f.email.value;
            this.router.navigate([`home/for-not-logged-in/send`]);
            console.log(value);
        }
    }

    onSubmitToken(value) {
        this.enabledValidatorsToken = true;
        if (!this.tokenForm.invalid) {
            console.log(value);
        }
    }

    ngOnInit() {
        this.sendForm = this.formBuilder.group({
            'email': ['', [Validators.required, Validators.email]]
        });
        this.tokenForm = this.formBuilder.group({
            'token': ['', Validators.required]
        });
    }

}
