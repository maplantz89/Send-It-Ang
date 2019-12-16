import { Component, OnInit, Input } from '@angular/core';
import { Climb } from 'src/app/models/climb.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-climb-list-item',
  templateUrl: './climb-list-item.component.html',
  styleUrls: ['./climb-list-item.component.scss']
})
export class ClimbListItemComponent implements OnInit {
  @Input() climb: Climb;
  @Input() index: number;

  constructor(private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
  }

  onClimbSelect(){
    this.router.navigate([this.index], {relativeTo: this.route});
  }

}
