import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ForNotLoggedInComponent} from './for-not-logged-in/for-not-logged-in.component';
import {SenderComponent} from './for-not-logged-in/sender/sender.component';


const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'for-not-logged-in', component: ForNotLoggedInComponent},
  {path: 'for-not-logged-in/send', component: SenderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
