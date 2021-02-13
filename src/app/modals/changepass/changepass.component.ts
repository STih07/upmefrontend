import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MustMatch } from 'src/app/utils/validators/must-match.validator';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'upme-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {

  showPassword: boolean;
  showErrors: boolean;
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

  ngOnInit() {
    this.showPassword = false;
    this.showErrors = false;
    this.changeForm.valueChanges.subscribe(() => this.showErrors = false);
  }

  onSubmit() {
    this.authService.changePass().subscribe((val) => {
      console.log(val);
      if (this.changeForm.valid) {   
        console.log(123);
          this.toastr.success('Вы можете войти в аккаунт', 'Вы успешно сменили пароль!');
          this.modal.dismissAll();  
      } else {    
        console.log(12345);        
        this.showErrors = true;
      }
    });
  }

  onEyeClick() {
    this.showPassword = !this.showPassword;
  }

  close(): void {
    this.activeModal.close();
  }

  goRecovery() {
    this.modal.dismissAll();
    this.router.navigateByUrl('auth/recovery-password');
  }

}