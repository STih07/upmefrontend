import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showPassword: boolean;

  singInForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]]
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.showPassword = false;
  }

  onSubmit() {
    this.authService.login(this.singInForm.value).subscribe(() => this.router.navigateByUrl(''), error => this.handleError(error));
  }

  onEyeClick() {
    this.showPassword = !this.showPassword;
  }

  private handleError(error: HttpErrorResponse): void {
    switch (error.error.message) {
      case 'Wrong password':
        this.singInForm.controls.password.setErrors({ wrongPassword: true } );
        break;
      case 'User not found':
        this.singInForm.controls.email.setErrors({ noSuchEmail: true } );
        break;
    }
  }
}
