import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './@private/@private.module';
import { HomeComponent } from './public/home/home.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const redirectLoginToNotebooks = () => redirectLoggedInTo([`/${PrivateModule.route}`]);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo([`/${HomeComponent.route}`]);

const routes: Routes = [
  {
    path: `${HomeComponent.route}`,
    component: HomeComponent,
    pathMatch:'prefix',
    ...canActivate(redirectLoginToNotebooks),
  },
  {
    path: PrivateModule.route,
    loadChildren: () =>
      import('./@private/@private.module').then((m) => m.PrivateModule),

      ...canActivate(redirectUnauthorizedToHome)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
