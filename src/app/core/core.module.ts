import { RootStoreModule } from './store/root-store.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './components-smart/users-table/users-table.component';
import { UsersScreenComponent } from './components-smart/users-screen/users-screen.component';
import { UsersTableScreenComponent } from './components-dumb/users-table-screen/users-table-screen.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule  } from '@angular/material/sort';
import { CustomErrorHandler } from './errors/customErrorHandler'




@NgModule({
  declarations: [UsersTableComponent, UsersScreenComponent, UsersTableScreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    RootStoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: CustomErrorHandler}
  ]
})
export class CoreModule { }
