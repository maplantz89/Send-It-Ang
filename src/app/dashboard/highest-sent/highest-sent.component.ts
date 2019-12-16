import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { DataObservablesService } from '../../services/observables/data-observables.service';

@Component({
  selector: 'app-highest-sent',
  templateUrl: './highest-sent.component.html',
  styleUrls: ['./highest-sent.component.scss']
})
export class HighestSentComponent implements OnInit {
  highestDifficulty: {} = null;

  constructor(private dataService: DataService,
    private dataObservableService: DataObservablesService) { }

  ngOnInit() {
    this.dataService.getHighestDifficulty(6);
    this.dataObservableService.highestDifficulty.subscribe(highestDifficulty => {
      highestDifficulty ? this.highestDifficulty = highestDifficulty : ''
    })
  }

}
