import { usersData } from './../../store/reducers/users-data.reducer';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserData } from '@app/core/interfaces/userData';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs/internal/Observable';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-users-table-screen',
  templateUrl: './users-table-screen.component.html',
  styleUrls: ['./users-table-screen.component.sass']
})
export class UsersTableScreenComponent implements OnInit {

  @Input() usersData: Observable<{ [key: number]: UserData; }>;
  @Output() deleteUser = new EventEmitter<UserData>();
  dataSource; // = new MatTableDataSource<UserData>(this.usersData.subscribe(()=> console.log("ddd")));
  displayedColumns: string[] = ['username', 'firstname', 'lastname', 'role', 'delete', 'modify'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.usersData.subscribe((val) => {
      this.dataSource = new MatTableDataSource(Object.values(val));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // this.usersData.subscribe((data) => this.dataSource = data);
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
