import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;
  private dataStore:{
    user: User[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { user: []};
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]>{
    return this._users.asObservable();
  }

  userByid (id: number){
    return this.dataStore.user.find(x=> x.id == id)
  }

  loadAll(){
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(usersUrl)
    .subscribe(data =>{
      this.dataStore.user = data;
      this._users.next(Object.assign({},this.dataStore).user);
    }, error => {
      console.log('Failed to fetch users')
    })

  }
}
