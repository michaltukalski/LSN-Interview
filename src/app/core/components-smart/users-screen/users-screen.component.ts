import { UserActivityActions } from '@app/core/store/actions';
import { UserData } from './../../interfaces/userData';
import { Component, OnInit } from '@angular/core';
import { UserRoles } from '@app/core/constants/userRoles';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users-screen',
  templateUrl: './users-screen.component.html',
  styleUrls: ['./users-screen.component.sass']
})
export class UsersScreenComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  newUser(){
    const newUser: UserData = {
      enabled: true,
      firstName: '',
      lastName: '',
      username: '',
      role: UserRoles.User
    };
    this.store.dispatch(UserActivityActions.ModifyUser({user: newUser}));
  }

}
