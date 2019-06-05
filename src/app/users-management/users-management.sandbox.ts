import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as getUserReducer from './store/user.reducer';
import * as userActions from './store/user.actions';
import { Observable } from 'rxjs';
import { User } from './models/users.model';
@Injectable(
   { providedIn: 'root' }
)
export class UserSandbox {
   userData$;
   constructor(private userState$: Store<any>) { }
   public loadUserInitData() {
      this.userState$.dispatch(new userActions.LoadUsers());
   }
}
