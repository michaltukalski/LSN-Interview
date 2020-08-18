import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersScreenComponent } from './users-screen.component';
import { Store, StoreModule } from '@ngrx/store';

describe('UsersScreenComponent', () => {
  let component: UsersScreenComponent;
  let fixture: ComponentFixture<UsersScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ UsersScreenComponent ],
      providers: [Store],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
