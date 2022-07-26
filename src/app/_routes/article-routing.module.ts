import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from '../_containers/article/article.component';

const routes: Routes = [
    {
        path: ':slug',
        // pathMatch: 'full',
        component: ArticleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule { }
