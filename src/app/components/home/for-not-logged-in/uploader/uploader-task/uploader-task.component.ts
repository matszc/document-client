import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import {UploadService} from '../../../../../services/upload.service';

@Component({
  selector: 'app-uploader-task-home',
  templateUrl: './uploader-task.component.html',
  styleUrls: ['./uploader-task.component.scss']
})
export class UploaderTaskHomeComponent implements OnInit {

  @Input() file: File;
  @Input() document;

  constructor(private uploadService: UploadService) { }



  public deleteFile(f) {
    this.uploadService.files = this.uploadService.files.filter(item => item.name !== f.name);
  }

  ngOnInit() {

  }

}
