import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../_containers/profile/profile.component';

const routes: Routes = [
    {
        path: ':username',
        component: ProfileComponent,
        data: {
            mode: 'author'
        }
    },
    {
        path: ':username/favourites',
        component: ProfileComponent,
        data: {
            mode: 'favourite'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
