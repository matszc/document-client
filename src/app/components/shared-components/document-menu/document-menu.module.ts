import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentMenuComponent} from './document-menu.component';
import {TieredMenuModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        DocumentMenuComponent
    ],
    imports: [
        CommonModule,
        TieredMenuModule
    ],
    exports: [
        DocumentMenuComponent
    ]
})
export class DocumentMenuModule {
}
