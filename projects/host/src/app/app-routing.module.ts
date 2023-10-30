import { loadRemoteModule } from '@angular-architects/module-federation';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  // {
  //   path: 'employee',
  //   loadChildren: () =>
  //     import('employeeMFE/homeModule').then((module) => module.HomeModule),
  // },

  {
    path: 'employee',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.employee,
        exposedModule: 'EmployeeModule',
      }).then((m) => m.EmployeeModule),

  },
  {
    path: 'employee-details',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.employee,
        exposedModule: 'EmployeeDetailsModule',
      }).then((m) => m.EmployeeDetailsModule),

  },
  {
    path: 'project',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.project,
        exposedModule: 'ProjectModule',
      }).then((m) => m.ProjectModule),

  },
  {
    path: 'assign-project',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.project,
        exposedModule: 'AssignProjectModule',
      }).then((m) => m.AssignProjectModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
