import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output('logOut') logOutEmiter =  new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  logOut(){
    this.logOutEmiter.emit();
  }

}
