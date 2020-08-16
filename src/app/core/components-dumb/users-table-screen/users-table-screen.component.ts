import { usersData } from './../../store/reducers/users-data.reducer';
import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '@app/core/interfaces/userData';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users-table-screen',
  templateUrl: './users-table-screen.component.html',
  styleUrls: ['./users-table-screen.component.sass']
})
export class UsersTableScreenComponent implements OnInit {

  @Input() usersData: UserData[];
  dataSource = new MatTableDataSource(this.usersData);
  displayedColumns: string[] = ['position', 'username', 'firstname', 'lastname', 'role'];


  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
