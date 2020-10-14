export const AppPrivateModuleBaseRoute = '';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { NoteComponent } from './note/note.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { NotesComponent } from './notes/notes.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: NotebooksComponent.routeName,
        pathMatch: 'full',
        component: NotebooksComponent,
      },
      {
        path: NotesComponent.routeName,
        pathMatch: 'full',
        component: NotesComponent,
      },
      {
        path: SettingsComponent.routeName,
        pathMatch: 'prefix',
        component: SettingsComponent,
      },
      {
        path: `${NoteComponent.routeName}/:${NoteComponent.param}`,
        component: NoteComponent,
      },
      {
        path: `${MobileSearchComponent.routeName}`,
        component: MobileSearchComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: NotebooksComponent.routeName,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
