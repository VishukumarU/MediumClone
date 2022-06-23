import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopbarComponent } from 'src/app/_containers/topbar/topbar.component';

@NgModule({
    declarations: [
        TopbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        TopbarComponent
    ]
})
export class TopbarModule { }
