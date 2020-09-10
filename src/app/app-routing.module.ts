import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Task1Component} from './task1/task1.component';

const routes: Routes = [
  {
    path: '', component: Task1Component
  },
  {
    path: 'task2',
    loadChildren: () => import('./task2/task2.module').then(m => m.Task2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
