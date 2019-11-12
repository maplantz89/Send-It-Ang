import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-climb-list',
  templateUrl: './climb-list.component.html',
  styleUrls: ['./climb-list.component.scss']
})
export class ClimbListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    return fetch(`http://localhost:8000/api/climbs/6`, {
      method: 'GET', 
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(error => Promise.reject(error))
      : res.json()
      )
  }

}
