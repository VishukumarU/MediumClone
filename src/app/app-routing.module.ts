import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_containers/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./_modules/home.module').then(m => m.HomeModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./_modules/auth.module').then(m => m.AuthModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
