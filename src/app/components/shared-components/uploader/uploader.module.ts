import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploaderTaskComponent} from './uploader-task/uploader-task.component';
import {UploaderComponent} from './uploader.component';
import {DropzoneDirective} from './dropzone.directive';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
      UploaderComponent,
      UploaderTaskComponent,
    DropzoneDirective
  ],
  imports: [
    CommonModule,
      ButtonModule
  ],
  exports: [
      UploaderComponent
  ]
})
export class UploaderModule { }
