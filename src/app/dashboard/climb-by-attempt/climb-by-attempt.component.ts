import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { DataObservablesService } from '../../services/observables/data-observables.service';

@Component({
  selector: 'app-climb-by-attempt',
  templateUrl: './climb-by-attempt.component.html',
  styleUrls: ['./climb-by-attempt.component.scss']
})
export class ClimbByAttemptComponent implements OnInit {
  totalAttempts: {} = null;

  constructor(private dataService: DataService,
    private dataObservableService: DataObservablesService) { }

  ngOnInit() {
    this.dataService.getTotalAttempts(6);
    this.dataObservableService.totalAttempts.subscribe(totalAttempts => {
      totalAttempts ? this.totalAttempts = totalAttempts : ''
    })
  }

}
