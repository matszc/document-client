import { Component, OnInit } from '@angular/core';
import {AngularFireUploadTask} from '@angular/fire/storage';
import {UploadService} from '../../../../services/upload.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {



  public isHovering: boolean;



  constructor(public uploadService: UploadService) { }

  public toggleHover(event: boolean) {
    this.isHovering = event;
  }

  public onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.uploadService.files.push(files.item(i));
    }
  }



  ngOnInit() {
  }

}
