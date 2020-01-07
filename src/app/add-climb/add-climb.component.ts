import { Component, OnInit } from '@angular/core';
import { ClimbsListServiceService } from '../services/climbs-list-service.service';
import { Difficulty } from '../models/difficulty.model';
import { Climb } from '../models/climb.model';
import { visitAll } from '@angular/compiler';

@Component({
  selector: 'app-add-climb',
  templateUrl: './add-climb.component.html',
  styleUrls: ['./add-climb.component.scss']
})
export class AddClimbComponent implements OnInit {
  attempts: number = 1;
  difficulties: Difficulty[];

  constructor(private climbsServer: ClimbsListServiceService) { }

  ngOnInit() {
    this.difficulties = this.climbsServer.difficulties;
  }

  onDecrement() {
    if (this.attempts > 0) {
      this.attempts--;
    }
  }
  onIncrement() {
    this.attempts++;
  }

  // submitClimbToServer
  onSubmitClimb(data: Climb){
    console.log(data);
    const newClimb = {
      attempts: this.attempts, 
      location: 'Vital', 
      favorite: true,
      difficulty: 2
      };
    // this.climbsServer.submitClimb(newClimb, 2)
  }
}