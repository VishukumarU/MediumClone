import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    },
    {
        path: 'article',
        loadChildren: () => import('./_modules/article.module').then(m => m.ArticleModule),

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
