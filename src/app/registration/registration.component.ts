import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ClimbsListServiceService } from '../services/climbs-list-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: {} = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.postUser({username: 'Momothecat', email: 'email234@email.com', password: 'Password098'})
  }

}
