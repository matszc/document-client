import { Component, OnInit } from '@angular/core';
import {LoginData} from '../../../models/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {SelectItem} from 'primeng/api';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UploadService} from '../../../services/upload.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  public sendForm: FormGroup;
  public enabledValidators: boolean;
  public documentTypes: SelectItem[];
  public documentReceivers: SelectItem[];
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;



  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private uploadService: UploadService) {
    this.enabledValidators = false;
    this.documentTypes = [
      { label: 'Wybierz Rodzaj', value: null },
      { label: 'Podanie', value: 5 },
      { label: 'Skarga', value: 4 },

    ];
    this.documentReceivers = [
      { label: 'Wybierz Odbiorcę', value: null },
      { label: 'Jan Kowalski', value: 1 },
      { label: 'Piotr Domaniewski', value: 2 },
      { label: 'Bożena Wiśniewska', value: 2 },

    ];
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const re = /(?:\.([^.]+))?$/;
    // console.log(re.exec(file.name));
    console.log(`${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}.${re.exec(file.name)[1]}`);
    /*const filePath = 'name-your-file-path-here';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);*/
  }

  get f(): any { return this.sendForm.controls; }

  public onSubmit(value): void {
    this.enabledValidators = true;

    console.log(value);
    this.uploadService.startUpload();
  }

  ngOnInit() {
    console.log();
    this.sendForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'type': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'message': ['', Validators.required],
      'filename': ['', Validators.required],
      'receiver': ['', Validators.required],
    });

  }

}
