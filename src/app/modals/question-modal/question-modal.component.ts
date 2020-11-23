import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'upme-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent implements OnInit {

  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }
  
  closeModal(): void {
    this.modalService.close();
  }
}
