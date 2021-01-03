import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  sessionActive = false;

  constructor(
    private userService: UserService
  ){

    this._init();
  }

  private _init(){
    this.userService.isLogged().subscribe( logged => this.sessionActive = logged);
  }

  logIn(user: string){
    this.userService.logIn(user);
  }

  logOut(){
    this.userService.logOut();
  }
}
