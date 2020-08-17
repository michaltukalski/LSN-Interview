import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserPopupComponent } from './components/delete-user-popup/delete-user-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifyUserPopupComponent } from './components/modify-user-popup/modify-user-popup.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DeleteUserPopupComponent, ModifyUserPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
