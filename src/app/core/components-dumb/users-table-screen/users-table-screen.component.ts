import { usersData } from './../../store/reducers/users-data.reducer';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserData } from '@app/core/interfaces/userData';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-users-table-screen',
  templateUrl: './users-table-screen.component.html',
  styleUrls: ['./users-table-screen.component.sass']
})
export class UsersTableScreenComponent implements OnInit {

  @Input() usersData: UserData[];
  @Output() deleteUser = new EventEmitter<UserData>();
  dataSource = new MatTableDataSource<UserData>(this.usersData);
  displayedColumns: string[] = ['position', 'username', 'firstname', 'lastname', 'role', 'delete', 'modify'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  modifySelected(elem: UserData){
    console.log('MODIFY', elem);
  }

  deleteSelected(elem: UserData){
    this.deleteUser.emit(elem);
  }
}
