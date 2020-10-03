import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './@private/@private.module';

const routes: Routes = [
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
