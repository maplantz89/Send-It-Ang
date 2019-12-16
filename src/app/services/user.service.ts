import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserObservablesService } from './observables/user-observables.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
