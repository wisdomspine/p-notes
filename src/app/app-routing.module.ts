import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './@private/@private.module';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path: `${HomeComponent.route}`,
    component: HomeComponent,
    pathMatch:'prefix',
  },
  {
    path: PrivateModule.route,
    loadChildren: () =>
      import('./@private/@private.module').then((m) => m.PrivateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
