import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-submit-modal',
  templateUrl: './submit-modal.component.html',
  styleUrls: ['./submit-modal.component.scss']
})
export class SubmitModalComponent implements OnInit {

  @Input() user: any;

  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void { }

  submitModal(): void {
    this.modalService.close();
  }

  closeModal(): void {
    this.modalService.close();
  }

}
