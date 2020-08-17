import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserPopupComponent } from './modify-user-popup.component';

describe('ModifyUserPopupComponent', () => {
  let component: ModifyUserPopupComponent;
  let fixture: ComponentFixture<ModifyUserPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyUserPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
