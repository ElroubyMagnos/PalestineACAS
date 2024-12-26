import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule) },
  { path: 'db', loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: 'students', loadChildren: () => import('./students/students.module').then(x => x.StudentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
