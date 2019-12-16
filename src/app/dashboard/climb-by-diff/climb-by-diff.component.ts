import { Component, OnInit } from '@angular/core';

import { ClimbsListServiceService } from '../../services/climbs-list-service.service';
import { ClimbObservablesService } from '../../services/observables/climb-observables.service';

@Component({
  selector: 'app-climb-by-diff',
  templateUrl: './climb-by-diff.component.html',
  styleUrls: ['./climb-by-diff.component.scss']
})
export class ClimbByDiffComponent implements OnInit {
  allClimbs: [] = null;

  constructor(  private climbsService: ClimbsListServiceService, 
    private climbsObservableService: ClimbObservablesService) { }

  ngOnInit() {
    this.climbsService.getAllClimbs(6)
    this.climbsObservableService.allClimbs.subscribe(climbsList => {
      climbsList ? this.allClimbs = climbsList : '';
    });
  }

}
