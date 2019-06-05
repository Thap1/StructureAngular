import { Action } from '@ngrx/store';
import { User } from '../models/users.model';

export enum UserActionType {
   LOAD_USERS = 'Load Users...',
   LOAD_USERS_SUCCESS = 'Load Users Success...',
   LOAD_USER_FAIL = 'Load Users Fail...'
}
export class LoadUsers implements Action {
   readonly type = UserActionType.LOAD_USERS;
   constructor() { }
}
export class LoadUsersSuccess implements Action {
   readonly type = UserActionType.LOAD_USERS_SUCCESS;
   constructor(public payload: User[]) { }
}
export class LoadUsersFail implements Action {
   readonly type = UserActionType.LOAD_USER_FAIL;
   constructor(public payload: string) { }
}

export type Action = LoadUsers | LoadUsersSuccess | LoadUsersFail;
