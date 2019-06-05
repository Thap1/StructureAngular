import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './screens/users-list/users-list.component';
import { UsersAddComponent } from './screens/users-add/users-add.component';
import { UsersEditComponent } from './screens/users-edit/users-edit.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user-list',
        component: UsersListComponent
      },
      {
        path: 'user-add',
        component: UsersAddComponent
      },
      {
        path: 'user-edit',
        component: UsersEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
