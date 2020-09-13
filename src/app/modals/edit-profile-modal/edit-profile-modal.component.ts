import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss']
})
export class EditProfileModalComponent {

  editProfileForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.pattern('^[a-zа-яA-ZА-Я]+(([\' -][a-zа-яA-ZА-Я ])?[aa-zа-яA-ZА-Я]*)*$'), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    telNumber: ['+38', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$'), Validators.required]],
    telegramNickName: ['']
  });

  constructor(private modalService: NgbActiveModal, private fb: FormBuilder) {
  }

  onCancel() {
    this.modalService.close();
  }
}
