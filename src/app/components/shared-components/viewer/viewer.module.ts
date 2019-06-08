import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewerComponent} from './viewer.component';
import {DropdownModule, InputTextModule, ProgressSpinnerModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
      ViewerComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
      TableModule,
      ProgressSpinnerModule,
      InputTextModule
  ],
  exports: [
      ViewerComponent
  ]
})
export class ViewerModule { }
