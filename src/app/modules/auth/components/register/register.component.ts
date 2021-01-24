import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MustMatch } from '../../../../utils/validators/must-match.validator';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  showPassword: boolean;
  showErrors: boolean;

  singUpForm: FormGroup = this.fb.group({
    name: ['', [Validators.minLength(3), Validators.required]],
    surname: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]]
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
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

  private handleError(error: HttpErrorResponse): void {
    switch (error.error.message) {
      case 'Not unique email':
        this.singUpForm.controls.email.setErrors({ notUniqueEmail: true });
        break;
    }
  }
}
