import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../_containers/home/home.component';
import { FeedModule } from './feed.module';
import { HomeRoutingRoutingModule } from '../_routes/home-routing-routing.module';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingRoutingModule,
        FeedModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
