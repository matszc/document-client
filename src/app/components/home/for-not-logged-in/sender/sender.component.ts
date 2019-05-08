import {Component, DoCheck, IterableDiffers, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';
import {UploadService} from '../../../../services/upload.service';
import {DocumentService} from '../../../../services/document.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit, OnDestroy {

  public sendForm: FormGroup;
  public enabledValidators: boolean;
  public documentTypes: SelectItem[];
  private differ: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private uploadService: UploadService,
              private messageService: MessageService,
              private iterableDiffers: IterableDiffers,
              private documentService: DocumentService) {
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
    if (this.uploadService.files.length) {
      this.enabledValidators = true;
      if (!this.sendForm.invalid) {
        this.uploadService.startUpload()
            .then((urls: Array<string>) => {
              value.files = urls;
              this.documentService.sendCase(value);
            })
            .catch((error) => {
              console.log(`Some failed: `, error.message);
            });
      }
    } else {
      this.messageService.add({severity: 'warn', summary: 'Warning', detail: 'Nie Dodano Plików'});
    }

  }



  ngOnInit() {
    this.sendForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'type': ['', Validators.required],
      'description': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'files': [this.documentService.notLoggedInUserEmail]
    });
  }

  ngOnDestroy(): void {
    this.documentService.notLoggedInUserEmail = '';
  }

}
