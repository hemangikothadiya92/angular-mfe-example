import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('employeeMFE/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('projectMFE/homeModule').then((module) => module.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
