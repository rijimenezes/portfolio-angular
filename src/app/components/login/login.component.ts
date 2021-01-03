import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output('logIn') logInEmiter =  new EventEmitter();
  
  form: FormGroup;

  constructor() { 

    this.form = new FormGroup(
      {
        name: new FormControl('',[ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        password: new FormControl('',[Validators.required])
      }
    );

  }

  ngOnInit(): void {
    
  }

  logIn(){
    if(this.form.valid){
      this.logInEmiter.emit(JSON.stringify(this.form.value));
    }
  }

}
