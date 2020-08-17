import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { UsersDataActions, AppFlowActions } from '../actions';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class AppFlowEffects {
  constructor(private store: Store, private actions$: Actions){

  }

  startApp$ = createEffect(() =>
    this.actions$.pipe(
    ofType(AppFlowActions.StartApp),
    map(() => UsersDataActions.LoadRequested())
  ));
}
