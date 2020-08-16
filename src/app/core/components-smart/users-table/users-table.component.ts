import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersDataSelectors } from '../../store/selectors';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {

  usersData$ = this.store.select(UsersDataSelectors.getUsers);

  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log("BBBBBB", this.usersData$)
  }

}
