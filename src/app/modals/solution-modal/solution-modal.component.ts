import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserSubmit } from 'src/app/models/user-submit';
import { SubmitModalComponent } from '../submit-modal/submit-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-solution-modal',
  templateUrl: './solution-modal.component.html',
  styleUrls: ['./solution-modal.component.scss']
})
export class SolutionModalComponent implements OnInit {

  @Input() user: UserSubmit;
  @Output() backValue: EventEmitter<any> = new EventEmitter();

  userStates = [
    { id: 0, name: 'Принят' },
    { id: 1, name: 'Принят на испытательный срок' },
    { id: 2, name: 'Не принят' },
    { id: 3, name: 'Не принят. Ты ещё очень юн и мы советуем тебе подать заявку в IT2School' },
  ];
  hasSolution = false;

  constructor(private modalService: NgbModal, private activeModalService: NgbActiveModal) { }

  ngOnInit(): void { }

  openSubmitModal(): void {
    const modalRef = this.modalService.open(SubmitModalComponent);
    modalRef.componentInstance.user = {
      users: this.user.users,
      name: this.user.name,
      solution: this.userStates[this.user.solution].name
    };
    modalRef.componentInstance.entryValue.subscribe((entryValue: UserSubmit) => {
      this.backValue.emit(entryValue);
    });
    this.activeModalService.close();
  }
}
