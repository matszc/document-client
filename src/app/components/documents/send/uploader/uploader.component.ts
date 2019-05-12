import {Component, Input, OnInit} from '@angular/core';
import {AngularFireUploadTask} from '@angular/fire/storage';
import {UploadService} from '../../../../services/upload.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  public isHovering: boolean;
  @Input() role: string;

  constructor(public uploadService: UploadService, private messageService: MessageService) { }

  public toggleHover(event: boolean) {
    this.isHovering = event;
  }

  public onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const reg = new RegExp('(.*?)\.(docx|doc)$');

      if ((reg.test(files.item(i).name))) {
        this.uploadService.files.push(files.item(i));
      } else {
        this.messageService.add({severity: 'warn', summary: 'Warning', detail: 'Złe Rozszerzenie Pliku'});
      }
    }
  }



  ngOnInit() {
  }

}
