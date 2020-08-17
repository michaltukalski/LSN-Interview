import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersDataSelectors } from '../../store/selectors';
import { UserData } from '@app/core/interfaces/userData';
import { UserActivityActions } from '@app/core/store/actions';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {

  usersData$ = this.store.select(UsersDataSelectors.getUsers);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  deleteUser(user: UserData){
    this.store.dispatch(UserActivityActions.DeleteUser({user}));
  }

  modifyUser(user: UserData){
    this.store.dispatch(UserActivityActions.ModifyUser({user}));
  }

}
