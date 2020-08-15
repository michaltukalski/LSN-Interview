import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UsersDataActions } from '../actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class UsersDataEffects {
  constructor(private store: Store, private actions$: Actions){

  }

  loadUsersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersDataActions.LoadSuccess),
      tap((data) => console.log(data))
    ), {dispatch: false});
}
