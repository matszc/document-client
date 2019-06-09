import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DocumentService} from '../../../services/document.service';
import {MessageService} from 'primeng/api';

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
    public display: boolean;
    public enteredToken: string;
    public loading: boolean;
    public displayEmailWithToken: boolean;
    public reneterTokenForm: FormGroup;

    constructor(private router: Router,
                public authService: AuthService,
                private formBuilder: FormBuilder,
                private documentService: DocumentService,
                private messageService: MessageService) {
        this.enabledValidatorsEmail = false;
        this.enabledValidatorsToken = false;
        this.display = false;
        this.enteredToken = '';
        this.displayEmailWithToken = false;
    }

    get f(): any {
        return this.sendForm.controls;
    }

    get t(): any {
        return this.tokenForm.controls;
    }

    onSubmitEmail() {
        this.enabledValidatorsEmail = true;
        if (!this.sendForm.invalid) {
            this.documentService.notLoggedInUserEmail = this.f.email.value;
            this.router.navigate([`unregistered/send`]);
        }
    }

    onSubmitToken() {
        const value = this.tokenForm.controls['token'].value;
        this.enabledValidatorsToken = true;
        if (!this.tokenForm.invalid) {
            this.loading = true;
            this.documentService.getToken(value).subscribe(() => {
                this.documentService.notLoggedInUserEmail = value;
                this.display = true;
                this.messageService.add({severity: 'success', summary: 'Info', detail: 'Wysłano Token na Twój Adres Email'});
                this.loading = false;
            }, () => this.loading = false);
        }
    }

    public checkToken(token) {
        if (token) {
            this.documentService.tempUnregistredToken = token;
            this.display = false;
            this.router.navigate([`unregistered/view`]);
        }
    }

    ngOnInit() {
        this.sendForm = this.formBuilder.group({
            'email': ['', [Validators.required, Validators.email]]
        });
        this.tokenForm = this.formBuilder.group({
            'token': ['', [Validators.required, Validators.email]]
        });
        this.reneterTokenForm = this.formBuilder.group({
            'mail': ['', Validators.required],
            'existToken': ['', Validators.required]
        });
    }

    public InsertExistToken() {
        this.displayEmailWithToken = true;
    }

    public reneterTokenFormSubmit() {
        if (this.reneterTokenForm.valid) {
            this.documentService.notLoggedInUserEmail = this.reneterTokenForm.value.mail;
            this.documentService.tempUnregistredToken = this.reneterTokenForm.value.existToken;
            this.displayEmailWithToken = false;
            this.router.navigate([`unregistered/view`]);
        }
    }

}
