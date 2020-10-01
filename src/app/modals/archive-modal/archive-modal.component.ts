import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserSubmit } from 'src/app/models/user-submit';

@Component({
  selector: 'app-archive-modal',
  templateUrl: './archive-modal.component.html',
  styleUrls: ['./archive-modal.component.scss']
})
export class ArchiveModalComponent implements OnInit {

  @Input() user: UserSubmit;

  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

  submitModal(): void {
    this.modalService.close(this.user);
  }

  closeModal(): void {
    this.modalService.close();
  }
}
