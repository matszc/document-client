import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';
import {UnregistredGuard} from './guards/unregistred.guard';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'account',
        loadChildren: './components/account/account.module#AccountModule',

    },
    {
        path: 'home', component: HomeComponent,
        canActivate: [UnregistredGuard],
        loadChildren: './components/home/home.module#HomeModule',
    },
    {
        path: 'documents',
        canActivate: [AuthGuard],
        loadChildren: './components/documents/documents.module#DocumentsModule',
    },
    {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: './components/admin/admin.module#AdminModule',
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
