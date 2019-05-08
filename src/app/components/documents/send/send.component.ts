import {Component, DoCheck, IterableDiffers, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {MessageService, SelectItem} from 'primeng/api';
import {UploadService} from '../../../services/upload.service';

@Component({
    selector: 'app-send',
    templateUrl: './send.component.html',
    styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit, DoCheck {

    public sendForm: FormGroup;
    public enabledValidators: boolean;
    public documentTypes: SelectItem[];
    private differ: any;


    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private uploadService: UploadService,
        private messageService: MessageService,
        private iterableDiffers: IterableDiffers) {

        this.enabledValidators = false;
        this.documentTypes = [
            {label: 'Wybierz Rodzaj', value: null},
            {label: 'Podanie', value: 5},
            {label: 'Skarga', value: 4},

        ];
        this.differ = this.iterableDiffers.find([]).create(null);
    }


    get f(): any {
        return this.sendForm.controls;
    }

    public onSubmit(value): void {
        console.log(value);
        if (this.uploadService.files.length) {
            this.enabledValidators = true;
            if (!this.sendForm.invalid) {
                // this.uploadService.startUpload();
            }
        } else {
            this.messageService.add({severity: 'warn', summary: 'Warning', detail: 'Nie Dodano Plików'});
        }

    }

    private updateForm(): void {
        this.inFormArray.controls.forEach((el, i) => {
            const deleted = !this.uploadService.files.map(f => f.name).includes(el.get('file').value);

            if (deleted) {
                this.inFormArray.removeAt(i);
            }
        });


        this.uploadService.files.forEach((f: File, i: number) => {
            const duplicate = this.inFormArray.controls.some(control => f.name === control.get('file').value);

            /*if (!duplicate) {
                const formGroup: FormGroup = this.formBuilder.group({
                    'title': ['', Validators.required],
                    'type': ['', Validators.required],
                    'description': ['', Validators.required],
                    'file': [f.name]
                });
                this.inFormArray.push(formGroup);
            }*/
        });

    }


    ngOnInit() {
        this.sendForm = this.formBuilder.group({
            'title': ['', Validators.required],
            'type': ['', Validators.required],
            'description': ['', Validators.required],
            'email': ['', [Validators.required, Validators.email]],
            'files': ['']
        });

        /*this.inFormArray.removeAt(0);*/


    }

    get inFormArray(): FormArray {
        return this.sendForm.get('docs') as FormArray;
    }

    ngDoCheck(): void {
        const changes = this.differ.diff(this.uploadService.files);
        if (changes) {
            this.updateForm();
        }
    }

}
