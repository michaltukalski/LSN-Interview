import { UserDataService } from './../../services/user-data.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UsersDataActions } from '../actions';
import { tap, map, switchMapTo, exhaustMap } from 'rxjs/operators';

@Injectable()
export class UsersDataEffects {
  constructor(private store: Store, private actions$: Actions, private service: UserDataService){

  }

  loadUsersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersDataActions.LoadRequested),
      exhaustMap(() => {
        return this.service.loadData().pipe(
          map(users => UsersDataActions.LoadSuccess({users}))
        );
      })
    ));

  usersDataLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersDataActions.LoadSuccess),
    ), {dispatch: false});
}
