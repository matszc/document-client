import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ForNotLoggedInComponent} from './for-not-logged-in/for-not-logged-in.component';
import {SenderHomeComponent} from './for-not-logged-in/sender/sender.component';
import {ViewHomeComponent} from './for-not-logged-in/view/view.component';
import {SingleDocHomeComponent} from './for-not-logged-in/single-doc/single-doc.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'for-not-logged-in', component: ForNotLoggedInComponent},
  {path: 'for-not-logged-in/send', component: SenderHomeComponent},
  {path: 'for-not-logged-in/view', component: ViewHomeComponent},
  {path: 'for-not-logged-in/view/:id', component: SingleDocHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
