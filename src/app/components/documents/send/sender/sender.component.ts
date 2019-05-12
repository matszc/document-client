import {Component, DoCheck, IterableDiffers, OnInit} from '@angular/core';
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
export class SenderComponent implements OnInit {

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
      {label: 'Podanie', value: 'podanie'},
      {label: 'Skarga', value: 'skarga'},

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
            .then((files: any) => {
              value.documents = files;
              this.documentService.sendCase(value).subscribe(() => {
                this.router.navigate(['documents/view']);
              });
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
      'documents': ['']
    });
  }

  /*ngDoCheck(): void {
    const changes = this.differ.diff(this.uploadService.files);
    if (changes) {
      this.updateForm();
    }
  }*/

}
