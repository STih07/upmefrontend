import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


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

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.showPassword = false;
  }

  onSubmit() {
    this.authService.login(this.singInForm.value);
  }

  onEyeClick() {
    this.showPassword = !this.showPassword;
  }
}
