import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.loginUser({username: 'Momothecat', password: 'Password098'})
  }

  onLogin(input){
    if(input.username === 'test' && input.password === 'password'){
      //push to dashboard route
    }
  }


}
