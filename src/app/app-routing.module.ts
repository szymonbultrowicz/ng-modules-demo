import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EagerLoadedComponent} from './eager-loaded/eager-loaded-component/eager-loaded.component';

const routes: Routes = [
  {
    path: 'eager',
    component: EagerLoadedComponent,
  },
  {
    path: 'lazy',
    loadChildren: './lazy-loaded/lazy-loaded.module#LazyLoadedModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
