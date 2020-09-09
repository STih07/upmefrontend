import { Component } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditProfileModalComponent} from '../modals/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  progressRef: NgProgressRef;
  response: any;

  mainUser = {
    name: 'Anna D.',
    icon: 'assets/img/user_img.png'
  };

  constructor(private ngProgress: NgProgress, private modalService: NgbModal) {
  }

  openEditProfileModal() {
    this.modalService.open(EditProfileModalComponent);
  }
}
