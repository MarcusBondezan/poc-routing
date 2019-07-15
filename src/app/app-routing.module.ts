import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: './public/public.module#PublicModule' },
  { path: 'dashboard', loadChildren: './protected/protected.module#ProtectedModule' }
  //https://stackoverflow.com/questions/55365464/same-url-path-but-loading-different-components-based-on-user-role-angular
  //https://stackoverflow.com/questions/41928727/angular-2-different-components-with-same-route?rq=1
  //https://stackoverflow.com/questions/53378649/lazy-load-modules-on-same-path-based-on-role
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
