import { Component, OnInit } from '@angular/core';
import { ClimbsListServiceService } from 'src/app/services/climbs-list-service.service';
import { ClimbObservablesService } from 'src/app/services/observables/climb-observables.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  allClimbs: [] = null;

  constructor(private climbsService: ClimbsListServiceService, 
      private climbsObservableService: ClimbObservablesService) { }

  ngOnInit() {
    this.climbsService.getAllClimbs(6)
    this.climbsObservableService.allClimbs.subscribe(climbsList => {
      climbsList ? this.allClimbs = climbsList : ''
    });
  }

}
