import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClimbObservablesService } from './observables/climb-observables.service';


@Injectable({
  providedIn: 'root'
})
export class ClimbsListServiceService {
  private _baseUrl = 'http://localhost:8000/api/climbs';
  
  difficulties = [
    { difficulty: 'VB', value: 0 },
    { difficulty: 'V1', value: 1 },
    { difficulty: 'V2', value: 2 },
    { difficulty: 'V3', value: 3 },
    { difficulty: 'V4', value: 4 },
    { difficulty: 'V5', value: 5 },
    { difficulty: 'V6', value: 6 },
    { difficulty: 'V7', value: 7 },
    { difficulty: 'V8', value: 8 },
    { difficulty: 'V9', value: 9 },
    { difficulty: 'V10+', value: 10 }
  ]

  constructor(private http: HttpClient, private climbObservableService: ClimbObservablesService) { }

  /**
   * GET api/climbs/user_id
   * @param user_id 
   */
  getAllClimbs(user_id: number) {
    this.http.get(`${this._baseUrl}/${user_id}`)
      .subscribe((climbs: []) => {
        this.climbObservableService.setAllClimbs(climbs);
      })
  }

  getClimbById(climb_id: number){
    
  }
}
