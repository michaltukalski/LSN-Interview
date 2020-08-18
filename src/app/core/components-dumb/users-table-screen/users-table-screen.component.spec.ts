import { usersData } from './../../store/reducers/users-data.reducer';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableScreenComponent } from './users-table-screen.component';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { UserRoles } from '@app/core/constants/userRoles';

describe('UsersTableScreenComponent', () => {
  let component: UsersTableScreenComponent;
  let fixture: ComponentFixture<UsersTableScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTableScreenComponent,  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableScreenComponent);
    component = fixture.componentInstance;
    const usersData$ = of([
      {username: 'El Capitano',
        firstName: 'Alex',
        lastName: 'Del Piero',
        role: UserRoles.User,
        enabled: true
      }]);
    component.usersData = usersData$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



