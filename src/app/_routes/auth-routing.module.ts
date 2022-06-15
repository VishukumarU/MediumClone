import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Region } from 'src/types/medium-clone/enums';
import { AuthComponent } from '../_containers/auth/auth.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: AuthComponent,
        data: {
            region: Region.Register
        }
    },
    {
        path: 'login',
        component: AuthComponent,
        data: {
            region: Region.Login
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
