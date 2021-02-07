import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/utils/validators/must-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'upme-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.scss']
})
export class RecoverPassComponent implements OnInit {

  showPassword: boolean;
  stepCounter: number;

  recoveryForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.showPassword = false;
    this.stepCounter = 1;
  }

  onEyeClick() {
    this.showPassword = !this.showPassword;
  }

  nextStep(): void {
    if (this.stepCounter < 4) {
      ++this.stepCounter;
    } else {
      this.router.navigateByUrl('/auth/login');
    }
  }
}
