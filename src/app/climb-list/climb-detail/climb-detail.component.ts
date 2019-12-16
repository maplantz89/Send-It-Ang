import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-climb-detail',
  templateUrl: './climb-detail.component.html',
  styleUrls: ['./climb-detail.component.scss']
})
export class ClimbDetailComponent implements OnInit {
  climb: {id: number};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.climb = {
      id: this.route.snapshot.params.id
    };
    // uses observable params only needed when the component 
    // needs to be reloaded while on the same route
    this.route.params
      .subscribe(
        (params: Params) => {
          this.climb.id = params['id'];
        }
      );
  }

}
