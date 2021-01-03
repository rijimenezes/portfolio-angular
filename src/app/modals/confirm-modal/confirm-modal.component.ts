import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  title = '';
  message = '';

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  close(action: string){
    this.modal.close(action);
  }
}
