import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { HomeComponent } from './screens/home/home.component';
import { NavbarComponent } from './screens/navbar/navbar.component';
import { UsersAddComponent } from './screens/users-add/users-add.component';
import { UsersEditComponent } from './screens/users-edit/users-edit.component';
import { UsersListComponent } from './screens/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {FormsModule} from '@angular/forms';
import { userReducer } from './store/user.reducer';
import { UserEffect } from './store/user.effect';
import { UserSandbox } from './users-management.sandbox';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, UsersAddComponent, UsersEditComponent, UsersListComponent],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
    StoreModule.forFeature('users', userReducer),
    FormsModule,
    EffectsModule.forFeature([UserEffect]),
  ],
  exports: [NavbarComponent]
})
export class UsersManagementModule { }
