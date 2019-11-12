import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimbObservablesService {
  //behavior subjects are items you can call next on to set values to it; next and getValue => look up later
  private _allClimbs = new BehaviorSubject<[]>(null); 
  allClimbs: Observable<[]> = this._allClimbs.asObservable();

  constructor() { }

  setAllClimbs(climbs: []){
    //setting the data into the BehaviorSubject
    this._allClimbs.next(climbs);
  }
}
