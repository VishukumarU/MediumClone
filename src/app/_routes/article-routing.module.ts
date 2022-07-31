import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from '../_containers/article/article.component';

const routes: Routes = [
    {
        path: 'new',
        component: ArticleComponent,
        data: {
            mode: 'create'
        }
    },
    {
        path: ':slug',
        pathMatch: 'full',
        component: ArticleComponent,
        data: {
            mode: 'display'
        }
    },
    {
        path: ':slug/edit',
        component: ArticleComponent,
        data: {
            mode: 'edit'
        }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule { }
