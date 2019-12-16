import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataObservablesService } from './observables/data-observables.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private _baseUrl = 'http://localhost:8000/api/data';
  constructor(private http: HttpClient, private dataObservableService: DataObservablesService) { }

  getHighestDifficulty(user_id: number){
    this.http.get(`${this._baseUrl}/${user_id}/highest_difficulty`)
      .subscribe((highestDifficulty: {}) => {
        this.dataObservableService.setHighestDifficulty(highestDifficulty);
      });
  };

  getTotalAttempts(user_id){
    this.http.get(`${this._baseUrl}/${user_id}/total_attempts`)
      .subscribe((totalAttempts: {}) => {
        this.dataObservableService.setTotalAttempts(totalAttempts);
      });
  };

  getLastClimb(user_id){
    this.http.get(`${this._baseUrl}/${user_id}/last_climb`)
      .subscribe((lastClimb: {}) => {
        this.dataObservableService.setLastClimb(lastClimb);
      });
  };
};
