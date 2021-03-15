import { Component, OnInit } from '@angular/core';
import { CommonObservableService } from '../services/observables/common-observables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageTitle;

  constructor(private commonObservableService: CommonObservableService) { }

  ngOnInit() {
    this.commonObservableService.pageTitle.subscribe(pageTitle => {
      this.pageTitle = pageTitle;
    })
  }

} 
