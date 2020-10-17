import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileModalComponent } from 'src/app/modals/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainUser = {
    name: 'Anna D.',
    icon: 'assets/img/user_img.png'
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openEditProfileModal() {
    this.modalService.open(EditProfileModalComponent);
  }

}
