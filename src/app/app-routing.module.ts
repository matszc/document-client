import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from './components/account/account.component';
import {LoginComponent} from './components/account/login/login.component';
import {ProfileComponent} from './components/account/profile/profile.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {DocumentsComponent} from './components/documents/documents.component';
import {SendComponent} from './components/documents/send/send.component';
import {ViewComponent} from './components/documents/view/view.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'account', component: AccountComponent, children: [
            {path: '', redirectTo: 'profile', pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
            {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
        ]
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'documents', component: DocumentsComponent, canActivate: [AuthGuard], children: [
            {path: '', redirectTo: 'view', pathMatch: 'full'},
            {path: 'send', component: SendComponent},
            {path: 'view', component: ViewComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
