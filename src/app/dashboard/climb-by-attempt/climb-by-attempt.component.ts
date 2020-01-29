import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { DataObservablesService } from '../../services/observables/data-observables.service';

@Component({
  selector: 'app-climb-by-attempt',
  templateUrl: './climb-by-attempt.component.html',
  styleUrls: ['./climb-by-attempt.component.scss']
})
export class ClimbByAttemptComponent implements OnInit {
  totalAttempts: {} = 
  {
    0: 2, 
    1: 1, 
    2: 0, 
    3: 3, 
    4: 1,
    5: 1,
    6: 0,
    7: 0,
    8: 0, 
    9: 0, 
    10: 0
  };

  constructor(private dataService: DataService,
    private dataObservableService: DataObservablesService) { }

  ngOnInit() {
    // this.dataService.getTotalAttempts(6);
    // this.dataObservableService.totalAttempts.subscribe(totalAttempts => {
    //   totalAttempts ? this.totalAttempts = totalAttempts : ''
    // })
  }

}
