import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';
import {UnregistredGuard} from './guards/unregistred.guard';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'account',
        loadChildren: './components/account/account.module#AccountModule',

    },
    {
        path: 'home',
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
