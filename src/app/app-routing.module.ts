import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersManagementModule } from './users-management/users-management.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => UsersManagementModule,
    data: {preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
