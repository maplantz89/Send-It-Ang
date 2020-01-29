import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DataObservablesService } from 'src/app/services/observables/data-observables.service';

@Component({
  selector: 'app-last-climb',
  templateUrl: './last-climb.component.html',
  styleUrls: ['./last-climb.component.scss']
})
export class LastClimbComponent implements OnInit {
  lastClimb: {} =
    {
      id: 7,
      user_id: 1,
      attempts: 6,
      location: 'Vertical Hold',
      video: 'figure out',
      favorite: true,
      difficulty: 5
    };

  constructor(private dataService: DataService,
    private dataObservableService: DataObservablesService) { }

  ngOnInit() {
    // this.dataService.getLastClimb(6);
    // this.dataObservableService.lastClimb.subscribe(lastClimb => {
    //   lastClimb ? this.lastClimb = lastClimb : ''
    // })
  }

}
