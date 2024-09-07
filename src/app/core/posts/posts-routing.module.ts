import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/posts/posts.component').then(m => m.PostsComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./pages/post-details/post-details.component').then(m => m.PostDetailsComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
