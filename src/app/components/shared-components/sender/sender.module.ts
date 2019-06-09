import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {
  ButtonModule,
  DropdownModule, InputTextareaModule,
  InputTextModule,
  MessageModule,
  MessagesModule,
  PanelModule,
  ProgressSpinnerModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SenderComponent} from './sender.component';
import {UploaderModule} from '../uploader/uploader.module';

@NgModule({
  declarations: [
    SenderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    ButtonModule,
      InputTextModule,
      InputTextareaModule,
      UploaderModule
  ],
  exports: [
      SenderComponent
  ]
})
export class SenderModule { }
