import { ErrorPopupComponent } from './../../shared/components/error-popup/error-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable, Injector, ErrorHandler } from '@angular/core';


@Injectable()
export class CustomErrorHandler extends ErrorHandler {

  constructor(private dialog: MatDialog){
    super();
  }

  handleError(error) {

    const err = error.originalError || error;

    if (this.dialog.openDialogs.some(dialog => dialog.id === 'error-popup')) { return; }
    const dialogRef = this.dialog.open(ErrorPopupComponent, {
      id: 'error-popup',
      height: 'auto',
      width: '600px',
      panelClass: 'error-popup',
      disableClose: true,
      data: {hash: error.hash}
    });
  }
}
