import { Component, OnInit } from '@angular/core';
import { CommonObservableService } from '../services/observables/common-observables.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private commonObservableService: CommonObservableService) { }

  ngOnInit() {
    this.commonObservableService.updateTitle('Dashboard')
  }
}

