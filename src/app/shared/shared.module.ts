import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserPopupComponent } from './components/delete-user-popup/delete-user-popup.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [DeleteUserPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
