import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileModalComponent } from 'src/app/modals/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'upme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  response: any;

  mainUser = {
    name: 'Anna D.',
    icon: 'assets/img/user_img.png'
  };

  constructor(private modalService: NgbModal) {
  }

  openEditProfileModal() {
    this.modalService.open(EditProfileModalComponent);
  }

}
