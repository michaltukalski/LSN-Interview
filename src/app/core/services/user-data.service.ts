import { UserRoles } from './../constants/userRoles';
import { UserData } from './../interfaces/userData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  usernames = ['Coach', 'Half-God', 'CR7', 'Warior', 'Redhair', 'Superman', 'Papa', 'La Joya', 'Dancer', 'Lewy', 'Allah' ];
  firstnames = ['Marcelo', 'Leo', 'Cristiano', 'Mario', 'Kevin', 'Gigi', 'Antonio', 'Paolo', 'Jurek', 'Robert', 'Mohamed'];
  lastnames = ['Lippi', 'Messi', 'Ronaldo', 'Mandzukic', 'De Bruyne', 'Buffon', 'Conte', 'Dybala', 'Dudek', 'Lewandowski', 'Salah'];

  constructor() { }

  loadData(): Observable<UserData[]>{
    return of(this.prepareData());
  }

  private prepareData(): UserData[]{
    return this.usernames.map((username, i) => {
      return {
        username,
        firstName: this.firstnames[i],
        lastName: this.lastnames[i],
        role: i === 0 ? UserRoles.Admin : UserRoles.User,
        enabled: i !== 0
      };
    });

  }
}
