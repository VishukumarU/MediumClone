import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../_containers/home/home.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        data: {
            mode: 'feed'
        }
    },
    {
        path: 'feed',
        component: HomeComponent,
        data: {
            mode: 'your-feed'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingRoutingModule { }
