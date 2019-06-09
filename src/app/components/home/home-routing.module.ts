import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ForNotLoggedInComponent} from './for-not-logged-in/for-not-logged-in.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'for-not-logged-in', component: ForNotLoggedInComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
