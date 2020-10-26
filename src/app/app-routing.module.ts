import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ADMIN_PATHS, AUTH_PATHS } from './constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: AUTH_PATHS.LOGIN,
    pathMatch: 'full'
  },
  {
    path: AUTH_PATHS.LOGIN,
    component: LoginComponent
  },
  {
    path: AUTH_PATHS.REGISTER,
    component: RegisterComponent
  },
  {
    path: ADMIN_PATHS.DASHBORD,
    loadChildren:() => import('./internal/internal.module').then(m => m.InternalModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
