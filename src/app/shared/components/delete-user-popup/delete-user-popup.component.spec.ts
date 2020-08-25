import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserPopupComponent } from './delete-user-popup.component';
import { Store, StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { noop } from 'rxjs';
import { Component, NgModule } from '@angular/core';
import { UserRoles } from '@app/core/constants/userRoles';

describe('DeleteUserPopupComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;

  let noop: ComponentFixture<NoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), DialogTestModule, NoopAnimationsModule],
      // declarations: [ ModifyUserPopupComponent ],
      providers: [
        Store,
        FormBuilder,
        { provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return { getContainerElement: () => overlayContainerElement };
        }}
      ],
    });
    dialog = TestBed.inject(MatDialog);
    noop = TestBed.createComponent(NoopComponent);
  }));

  it ('shows delete question with answer buttons', () => {
    const config = {id: 'delete-popup',
      height: 'auto',
      width: '600px',
      panelClass: 'delete-popup',
      data: {user : {
        enabled: true,
        firstName: 'Mike',
        lastName: 'Wazalski',
        username: 'Monster',
        role: UserRoles.User
      }}
    };
    dialog.open(DeleteUserPopupComponent, config);

    noop.detectChanges(); // Updates the dialog in the overlay - workaround

    const yesButton = overlayContainerElement.querySelector('#yesButton');
    expect (yesButton.textContent).toBe('Yes!');
    const noButton = overlayContainerElement.querySelector('#noButton');
    expect (noButton.textContent).toBe('No!');

  });
});
// Noop component is only a workaround to trigger change detection
@Component({
    template: ''
  })
  class NoopComponent {}

const TEST_DIRECTIVES = [
  DeleteUserPopupComponent,
    NoopComponent
  ];

@NgModule({
    imports: [MatDialogModule],
    exports: TEST_DIRECTIVES,
    declarations: TEST_DIRECTIVES,
    entryComponents: [
      DeleteUserPopupComponent
    ],
  })
  class DialogTestModule { }
