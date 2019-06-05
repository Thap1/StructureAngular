import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from '../service/user.service';
import { Observable, of } from 'rxjs';
import * as userActions from './user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { User } from '../models/users.model';

@Injectable()
export class UserEffect {
   constructor(private actions$: Actions, private userService: UserService) { }

   @Effect({ dispatch: true })
   loadUsers$: Observable<Action> = this.actions$.pipe(
      ofType<userActions.LoadUsers>(
         userActions.UserActionType.LOAD_USERS
      ),
      mergeMap((action: userActions.LoadUsers) =>
         this.userService.getUsers().pipe(
            map(
               (users: User[]) => {
                  return new userActions.LoadUsersSuccess(users);
               }
            ),
            catchError(
               err => of(new userActions.LoadUsersFail(err)
               )
            )
         )
      )
   );
}
