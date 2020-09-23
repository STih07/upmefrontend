import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileUser } from 'src/app/models/profile-user';

@Component({
  selector: 'app-submit-modal',
  templateUrl: './submit-modal.component.html',
  styleUrls: ['./submit-modal.component.scss']
})
export class SubmitModalComponent implements OnInit {

  @Input() user: ProfileUser;

  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.user);
   }

  submitModal(): void {
    this.modalService.close();
  }

  closeModal(): void {
    this.modalService.close();
  }

}
