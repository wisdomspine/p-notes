export const AppPrivateModuleBaseRoute = '';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotebooksComponent } from './notebooks/notebooks.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: NotebooksComponent.routeName, pathMatch: 'full' },
      { path: '', pathMatch: 'full', redirectTo: NotebooksComponent.routeName },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
