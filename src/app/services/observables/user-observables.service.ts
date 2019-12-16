import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserObservablesService {

  private _user = new BehaviorSubject<{}>(null);
  user: Observable<{}> = this._user.asObservable();

  constructor() { }

  setUser(user: {}){
    this._user.next(user);
  }
}
