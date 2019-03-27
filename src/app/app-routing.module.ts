import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from './components/account/account.component';
import {LoginComponent} from './components/account/login/login.component';
import {ProfileComponent} from './components/account/profile/profile.component';

const routes: Routes = [
    {
        path: 'account', component: AccountComponent, children: [
            {path: '', redirectTo: 'profile', pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
            {path: 'profile', component: ProfileComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
