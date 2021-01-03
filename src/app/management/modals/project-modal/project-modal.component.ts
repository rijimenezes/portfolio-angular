import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
  
  project: any;

  action: string = '';

  constructor(
    private modal: NgbActiveModal    
  ) { 
    
    //this.project = '';
  }

  ngOnInit(): void {
    
  }

  close(){
    this.modal.close('ira pues');        
  }

}
