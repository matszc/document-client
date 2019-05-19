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

    constructor(private router: Router,
                public authService: AuthService,
                private formBuilder: FormBuilder,
                private documentService: DocumentService,
                private messageService: MessageService) {
        this.enabledValidatorsEmail = false;
        this.enabledValidatorsToken = false;
        this.display = false;
        this.enteredToken = '';
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

    onSubmitToken(value, email) {
        this.enabledValidatorsToken = true;
        if (!this.tokenForm.invalid) {
          this.loading = true;
            this.documentService.getToken(value.token).subscribe(() => {
                this.documentService.notLoggedInUserEmail = email;
                this.display = true;
                this.messageService.add({severity: 'success', summary: 'Info', detail: 'Wysłano Token na Twój Adres Email'});
                this.loading = false;
            }, () => this.loading = false );
        }
    }

    public checkToken(token) {
        if (token) {
            this.documentService.tempUnregistredToken = token;
            this.display = false;
            this.router.navigate([`home/for-not-logged-in/view`]);
        }

    }

    ngOnInit() {
        this.sendForm = this.formBuilder.group({
            'email': ['', [Validators.required, Validators.email]]
        });
        this.tokenForm = this.formBuilder.group({
            'token': ['', [Validators.required, Validators.email]]
        });
    }

}
