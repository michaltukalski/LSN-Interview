import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserPopupComponent } from './modify-user-popup.component';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

describe('ModifyUserPopupComponent', () => {
  let component: ModifyUserPopupComponent;
  let fixture: ComponentFixture<ModifyUserPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ ModifyUserPopupComponent ],
      providers: [
        Store,
        FormBuilder,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
