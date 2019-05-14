import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ForNotLoggedInComponent} from './for-not-logged-in/for-not-logged-in.component';
import {SenderComponent} from './for-not-logged-in/sender/sender.component';
import {ViewComponent} from './for-not-logged-in/view/view.component';
import {SingleDocComponent} from './for-not-logged-in/single-doc/single-doc.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'for-not-logged-in', component: ForNotLoggedInComponent},
  {path: 'for-not-logged-in/send', component: SenderComponent},
  {path: 'for-not-logged-in/view', component: ViewComponent},
  {path: 'for-not-logged-in/view/:id', component: SingleDocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
