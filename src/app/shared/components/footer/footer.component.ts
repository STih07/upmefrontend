import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AskQuestionComponent } from 'src/app/modals/ask-question/ask-question.component';

@Component({
  selector: 'upme-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open() {
    this.modalService.open(AskQuestionComponent);
  }
}
