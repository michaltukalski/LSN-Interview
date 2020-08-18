import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserPopupComponent } from './delete-user-popup.component';
import { Store, StoreModule } from '@ngrx/store';

describe('DeleteUserPopupComponent', () => {
  let component: DeleteUserPopupComponent;
  let fixture: ComponentFixture<DeleteUserPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ DeleteUserPopupComponent ],
      providers: [Store],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
