import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateComponent } from './modules/account/page/activate/activate.component';
import { LoginPageComponent } from './modules/login/page/login-page/login-page.component';
import { MainPageComponent } from './modules/main/page/main-page/main-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    loadChildren: () =>
      import('./modules/main/main.module').then((x) => x.MainModule),
  },
  {
    path: 'account',
    children: [{ path: 'activate', component: ActivateComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
