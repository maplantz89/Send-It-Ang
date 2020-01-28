import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClimbObservablesService } from './observables/climb-observables.service';
import { Climb } from '../models/climb.model';


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

  climbs = [
    {
      id: 0,
      user_id: 1,
      attempts: 2,
      location: 'Mesa Rim',
      video: 'figure out',
      favorite: true,
      difficulty: 0
    },
    {
      id: 1,
      user_id: 2,
      attempts: 4,
      location: 'Vital - Carlsbad',
      video: 'figure out',
      favorite: false,
      difficulty: 3
    },
    {
      id: 2,
      user_id: 3,
      attempts: 2,
      location: 'Mesa Rim',
      video: 'figure out',
      favorite: true,
      difficulty: 3
    },
    {
      id: 3,
      user_id: 1,
      attempts: 1,
      location: 'The Wall',
      video: 'figure out',
      favorite: false,
      difficulty: 4
    },
    {
      id: 4,
      user_id: 5,
      attempts: 5,
      location: 'Vital - Oceanside',
      video: 'figure out',
      favorite: true,
      difficulty: 1
    },
    {
      id: 5,
      user_id: 2,
      attempts: 3,
      location: 'Mesa Rim',
      video: 'figure out',
      favorite: false,
      difficulty: 0
    },
    {
      id: 6,
      user_id: 4,
      attempts: 2,
      location: 'Vital - Murrieta',
      video: 'figure out',
      favorite: true,
      difficulty: 3
    },
    {
      id: 7,
      user_id: 1,
      attempts: 6,
      location: 'Vertical Hold',
      video: 'figure out',
      favorite: true,
      difficulty: 5
    },
  ];


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

  getClimbById(climb_id: number) {

  }

  submitClimb(climb: Climb, user_id: number) {
    console.log('in service posting');
    return this.http.post<Climb>(`${this._baseUrl}/${user_id}`, climb)
  }
}