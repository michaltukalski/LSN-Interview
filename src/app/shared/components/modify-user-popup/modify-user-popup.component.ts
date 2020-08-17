import { Component, OnInit, Inject } from '@angular/core';
import { UserData } from '@app/core/interfaces/userData';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserActivityActions } from '@app/core/store/actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRoles } from '@app/core/constants/userRoles';

@Component({
  selector: 'app-modify-user-popup',
  templateUrl: './modify-user-popup.component.html',
  styleUrls: ['./modify-user-popup.component.scss']
})
export class ModifyUserPopupComponent implements OnInit {

  angForm: FormGroup;
  user: UserData;

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) data, private fb: FormBuilder) {
    this.user = data.user;
    this.createForm();
    }


  ngOnInit(): void {
  }

  modifiedConfirmed(modifiedData: UserData){
    modifiedData.role = UserRoles.User;
    modifiedData.enabled = true;
    if (this.user.username === ''){
      this.store.dispatch(UserActivityActions.AddUserConfirmed({user: modifiedData}));
    }else{
      this.store.dispatch(UserActivityActions.ModifyUserConfirmed({user: this.user, modUser: modifiedData}));
    }
  }

  createForm() {
    this.angForm = this.fb.group({
       username: [this.user.username ? this.user.username : '', Validators.required ],
       firstName: [this.user.firstName ? this.user.firstName : '', Validators.required],
       lastName: [this.user.lastName ? this.user.lastName : '', Validators.required]
    });
  }

}
