import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedComponent } from './protected.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  declarations: [ProtectedComponent, HeaderComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProtectedModule { }
