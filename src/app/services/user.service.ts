import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserObservablesService } from './observables/user-observables.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
        id: 1,
        username: 'Martha', 
        email: 'martha@email.com',
        password: 'password'
    },
    {
        id: 2,
        username: 'Aaron', 
        email: 'aaron@email.com',
        password: 'hubbie'
    },
    {
        id: 3,
        username: 'Graham', 
        email: 'graham@email.com',
        password: 'brother'
    },
    {
        id: 4,
        username: 'Mike', 
        email: 'mike@email.com',
        password: 'friend'
    },
    {
        id: 5,
        username: 'Gary', 
        email: 'gary@email.com',
        password: 'brother-in-law'
    }
]

  user: {} = null;
  private _baseUrl = 'http://localhost:8000/api';
  private _httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private userObservableService: UserObservablesService) { }

  postUser(user: {}){
    this.http.post(`${this._baseUrl}/users`, user, this._httpOptions)
  }

  loginUser(user: {}){
    this.http.post(`${this._baseUrl}/auth/login`, user, this._httpOptions)
      .subscribe((user: {}) => {
        this.userObservableService.setUser(user);
      });
  }

}
