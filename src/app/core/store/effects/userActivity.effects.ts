import { DeleteUserPopupComponent } from './../../../shared/components/delete-user-popup/delete-user-popup.component';
import { tap, map} from 'rxjs/operators';
import { UserActivityActions } from '../actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Injectable()
export class UserActivityEffects {
  constructor(private store: Store,
              private actions$: Actions,
              private dialog: MatDialog){

  }

  deleteUser$ = createEffect(() =>
  this.actions$.pipe(
  ofType(UserActivityActions.DeleteUser),
  map((user) => {
    const dialogRef = this.dialog.open(DeleteUserPopupComponent, {
      id: 'delete-popup',
      height: 'auto',
      width: '600px',
      panelClass: 'delete-popup',
      data: user
    });
  })
  ), {dispatch: false});
}
