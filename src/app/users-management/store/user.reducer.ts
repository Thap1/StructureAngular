import { User } from '../models/users.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as userAction from './user.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserSate extends EntityState<User> {
   selectedUserId: number | null;
   loading: boolean;
   loaded: boolean;
   error: string;
}
export interface AppSate {
   users: UserSate;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();
export const defaultUser: UserSate = {
   ids: [],
   entities: {},
   selectedUserId: null,
   loading: false,
   loaded: false,
   error: ''
};
export const initialState = userAdapter.getInitialState(defaultUser);

export function userReducer(state = initialState, action: userAction.Action): UserSate {
   switch (action.type) {
      case userAction.UserActionType.LOAD_USERS_SUCCESS: {
         return userAdapter.addAll(action.payload, {
            ...state,
            loading: false,
            loaded: true
         });
      }
      case userAction.UserActionType.LOAD_USER_FAIL: {
         return {
            ...state,
            entities: {},
            loading: false,
            loaded: false,
            error: action.payload
         };
      }
      default: return state;
   }
}

const getUserFeatureState = createFeatureSelector<UserSate>('users');
export const getUsers = createSelector(getUserFeatureState, userAdapter.getSelectors().selectAll);
