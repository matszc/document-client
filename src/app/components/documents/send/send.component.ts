import {Component, DoCheck, IterableDiffers, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {MessageService, SelectItem} from 'primeng/api';
import {UploadService} from '../../../services/upload.service';
import {DocumentService} from '../../../services/document.service';

@Component({
    selector: 'app-send',
    templateUrl: './send.component.html',
    styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

    constructor() {


    }




    private updateForm(): void {
        /*this.inFormArray.controls.forEach((el, i) => {
            const deleted = !this.uploadService.files.map(f => f.name).includes(el.get('file').value);

            if (deleted) {
                this.inFormArray.removeAt(i);
            }
        });


        this.uploadService.files.forEach((f: File, i: number) => {
            const duplicate = this.inFormArray.controls.some(control => f.name === control.get('file').value);

        });*/
       // console.log(this.uploadService.files);

    }


    ngOnInit() {

    }



}
