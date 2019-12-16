import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObservablesService {

  private _highestDifficulty = new BehaviorSubject<{}>(null);
  highestDifficulty: Observable<{}> = this._highestDifficulty.asObservable();
  private _totalAttempts = new BehaviorSubject<{}>(null);
  totalAttempts: Observable<{}> = this._totalAttempts.asObservable();
  private _lastClimb = new BehaviorSubject<{}>(null);
  lastClimb: Observable<{}> = this._lastClimb.asObservable();

  constructor() { }

  setHighestDifficulty(highestDifficulty: {}){
    this._highestDifficulty.next(highestDifficulty);
  }

  setTotalAttempts(totalAttempts: {}){
    this._totalAttempts.next(totalAttempts);
  }

  setLastClimb(lastClimb: {}){
    this._lastClimb.next(lastClimb);
  }

}
