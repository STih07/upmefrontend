import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MustMatch } from '../../../../utils/validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  showPassword: boolean;

  singUpForm: FormGroup = this.fb.group({
    login: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.showPassword = false;
  }

  onSubmit() {
    this.authService.register(this.singUpForm.value);
  }

  onEyeClick() {
    this.showPassword = !this.showPassword;
  }
}