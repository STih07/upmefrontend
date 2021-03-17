import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangepassComponent } from 'src/app/modals/changepass/changepass.component';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss']
})
export class EditProfileModalComponent {

  editProfileForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.pattern('^[a-zа-яA-ZА-Я]+(([\' -][a-zа-яA-ZА-Я ])?[aa-zа-яA-ZА-Я]*)*$'), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    telNumber: ['+38', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$'), Validators.required]],
    telegramNickName: ['']
  });

  constructor(private activeModal: NgbActiveModal,private modalService: NgbModal, private fb: FormBuilder, private router: Router) {
  }

  logOut(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.activeModal.close();
    this.router.navigateByUrl('/auth/login');
  }

  onCancel(): void {
    this.activeModal.close();
  }

  open() {
    this.modalService.open(ChangepassComponent, {centered: true});
  }
}
