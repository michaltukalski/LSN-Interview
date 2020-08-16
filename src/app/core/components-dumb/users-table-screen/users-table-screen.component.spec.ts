import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableScreenComponent } from './users-table-screen.component';

describe('UsersTableScreenComponent', () => {
  let component: UsersTableScreenComponent;
  let fixture: ComponentFixture<UsersTableScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTableScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
