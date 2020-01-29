import { Component, OnInit } from '@angular/core';
import { ClimbsListServiceService } from '../services/climbs-list-service.service';
import { ClimbObservablesService } from '../services/observables/climb-observables.service';
import { UserObservablesService } from '../services/observables/user-observables.service';
import { UserService } from '../services/user.service';
import { CommonObservableService } from '../services/observables/common-observables.service';

@Component({
  selector: 'app-climb-list',
  templateUrl: './climb-list.component.html',
  styleUrls: ['./climb-list.component.scss']
})
export class ClimbListComponent implements OnInit {

  allClimbs;
  user: {} = null;
  id: number = 1; 

  constructor(private climbsService: ClimbsListServiceService,
    private climbsObservableService: ClimbObservablesService,
    private commonObservableService: CommonObservableService
    // private userObservableService: UserObservablesService,
    ) { }

  ngOnInit() {
    this.allClimbs = this.climbsService.climbs;

    this.commonObservableService.updateTitle('List');

    // this.climbsObservableService.allClimbs.subscribe(climbsList => {
    //   climbsList ? this.allClimbs = climbsList : ''
    // });
    // this.climbsService.getAllClimbs(6)
    // this.userObservableService.user.subscribe(user => {
    //   if (user !== null) {
    //     this.climbsService.getAllClimbs(user['id']);
    //   };
    // });
  };
};
