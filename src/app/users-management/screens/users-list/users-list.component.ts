import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/users.model';
import { UserSandbox } from '../../users-management.sandbox';
import { Store, select } from '@ngrx/store';
import { UserActionType } from '../../store/user.actions';
import { Subscription, Observable } from 'rxjs';
import * as fromUser from '../../store/user.reducer';
// import * as userSanBox from '../../users-management.sandbox';
@Component({
   selector: 'app-users-list',
   templateUrl: './users-list.component.html',
   styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
   usersData$: Subscription;
   user$: Observable<User[]>;
   constructor(
      public userSandbox: UserSandbox,
      private store: Store<any>
   ) { }

   ngOnInit() {
      this.userSandbox.loadUserInitData();
      this.user$ = this.store.pipe(select(fromUser.getUsers));

   }
   ngOnDestroy(): void {
      if (this.usersData$) {
         this.usersData$.unsubscribe();
      }
   }
}
