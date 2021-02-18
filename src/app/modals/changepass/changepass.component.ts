import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MustMatch } from 'src/app/utils/validators/must-match.validator';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'upme-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent {

  showOldP: boolean = false;
  showNewP: boolean = false;
  // showPassword: boolean = false;
  showErrors: boolean = false;
  changeForm: FormGroup = this.fb.group({
    oldPassword: ['', [Validators.minLength(8), Validators.required]],
    newPassword: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: MustMatch('newPassword', 'confirmPassword')
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private activeModal: NgbActiveModal,
    private modal: NgbModal,
    private toastr: ToastrService
  ) { }

  onSubmit() {
    if (this.changeForm.valid) {
    this.authService.changePass().subscribe((val) => {
      if (val) {   
          this.toastr.success('Вы можете войти в аккаунт', 'Вы успешно сменили пароль!');
          this.modal.dismissAll();  
      } 
    });
  }
  else {    
    this.showErrors = true;
  }
}

  onEyeClick(type: boolean) {
    if (type) {
      this.showOldP = !this.showOldP;
    } else {
      this.showNewP = !this.showNewP;
    }
  }

  close(): void {
    this.activeModal.close();
  }

  recovery() {
    this.modal.dismissAll();
    this.router.navigateByUrl('auth/recovery-password');
  }

}