import { Component, OnInit } from '@angular/core';
import { ClimbsListServiceService } from '../services/climbs-list-service.service';
import { ClimbObservablesService } from '../services/observables/climb-observables.service';
import { UserObservablesService } from '../services/observables/user-observables.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-climb-list',
  templateUrl: './climb-list.component.html',
  styleUrls: ['./climb-list.component.scss']
})
export class ClimbListComponent implements OnInit {

  allClimbs: [] = null;
  user: {} = null;
  id: number = 1; 

  constructor(private climbsService: ClimbsListServiceService,
    private climbsObservableService: ClimbObservablesService,
    // private userObservableService: UserObservablesService,
    ) { }

  ngOnInit() {
    this.climbsObservableService.allClimbs.subscribe(climbsList => {
      climbsList ? this.allClimbs = climbsList : ''
    });

    this.climbsService.getAllClimbs(6)

    // this.userObservableService.user.subscribe(user => {
    //   if (user !== null) {
    //     this.climbsService.getAllClimbs(user['id']);
    //   };
    // });
  };
};
