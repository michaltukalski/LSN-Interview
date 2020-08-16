import { RootStoreModule } from './store/root-store.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './components-smart/users-table/users-table.component';
import { UsersScreenComponent } from './components-smart/users-screen/users-screen.component';
import { UsersTableScreenComponent } from './components-dumb/users-table-screen/users-table-screen.component';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [UsersTableComponent, UsersScreenComponent, UsersTableScreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    RootStoreModule,
    MatTableModule,
  ]
})
export class CoreModule { }
