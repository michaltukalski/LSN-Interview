import { UserRoles } from './../../../core/constants/userRoles';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ModifyUserPopupComponent } from './modify-user-popup.component';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';



describe('ModifyUserPopupComponent', () => {
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

  it ('shows new user form with Cancel button', () => {
    const config = {id: 'modify-popup',
      height: 'auto',
      width: '600px',
      panelClass: 'modify-popup',
      data: {user : {
        enabled: true,
        firstName: '',
        lastName: '',
        username: '',
        role: UserRoles.User
      }}
    };
    dialog.open(ModifyUserPopupComponent, config);

    noop.detectChanges(); // Updates the dialog in the overlay - workaround

    const userNameField = overlayContainerElement.querySelector('input[formControlName=username]');
    expect (userNameField).toBeTruthy();

    const firstNameField = overlayContainerElement.querySelector('input[formControlName=firstName]');
    expect (firstNameField).toBeTruthy();

    const lastNameField = overlayContainerElement.querySelector('input[formControlName=lastName]');
    expect (lastNameField).toBeTruthy();

    const cancelButton = overlayContainerElement.querySelector('#cancelButton');
    expect (cancelButton.textContent).toBe('Cancel');

  });
});

// Noop component is only a workaround to trigger change detection
@Component({
  template: ''
})
class NoopComponent {}

const TEST_DIRECTIVES = [
  ModifyUserPopupComponent,
  NoopComponent
];

@NgModule({
  imports: [MatDialogModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    ModifyUserPopupComponent
  ],
})
class DialogTestModule { }
