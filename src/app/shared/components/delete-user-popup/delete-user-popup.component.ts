import { UserActivityActions } from '@app/core/store/actions';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from '@app/core/interfaces/userData';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-delete-user-popup',
  templateUrl: './delete-user-popup.component.html',
  styleUrls: ['./delete-user-popup.component.scss']
})
export class DeleteUserPopupComponent implements OnInit {

  user: UserData;

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) data) {
    this.user = data.user;
   }

  ngOnInit(): void {
  }

  deleteConfirmed(){
    this.store.dispatch(UserActivityActions.DeleteUserConfirmed({user: this.user}));
  }
}
