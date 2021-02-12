import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MustMatch } from '../../../../utils/validators/must-match.validator';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'upme-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {

  showPassword: boolean;
  showErrors: boolean;

  singUpForm: FormGroup = this.fb.group({
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private activeModal: NgbActiveModal,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.showPassword = false;
    this.showErrors = false;
    this.singUpForm.valueChanges.subscribe(() => this.showErrors = false);
  }

  onSubmit() {
    if (this.singUpForm.valid) {
      this.authService.register(this.singUpForm.value).subscribe(() => this.router.navigateByUrl(''), error => {
        this.showErrors = true;
        this.handleError(error);
      });
    } else {
      console.log(this.singUpForm);
      this.showErrors = true;
    }
  }

  onEyeClick() {
    this.showPassword = !this.showPassword;
  }

  close(): void {
    this.activeModal.close();
    console.log('+');
  }

  goRecovery() {
    this.modal.dismissAll();
    this.router.navigateByUrl('auth/recovery-password');
  }

  private handleError(error: HttpErrorResponse): void {
    switch (error.error.message) {
      case 'Not unique email':
        this.singUpForm.controls.email.setErrors({ notUniqueEmail: true });
        break;
    }
  }
}
