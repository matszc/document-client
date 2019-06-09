import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewComponent} from './view/view.component';
import {SingleDocComponent} from './single-doc/single-doc.component';
import {SendComponent} from './send/send.component';

export const routesDoc: Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path: 'send', component: SendComponent},
  {path: 'view', component: ViewComponent},
  {path: 'view/:id', component: SingleDocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesDoc)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
