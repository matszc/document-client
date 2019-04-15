import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from './components/account/account.component';
import {LoginComponent} from './components/account/login/login.component';
import {ProfileComponent} from './components/account/profile/profile.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {DocumentsComponent} from './components/documents/documents.component';
import {DocumentMenuComponent} from './components/document-menu/document-menu.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'account',
        loadChildren: './components/account/account.module#AccountModule',

    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'documents',
        canActivate: [AuthGuard],
        loadChildren: './components/documents/documents.module#DocumentsModule',
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
