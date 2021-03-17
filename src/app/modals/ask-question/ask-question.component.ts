import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
@Component({
  selector: 'upme-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent {

  showErrors: boolean = false;
  askForm: FormGroup = this.fb.group({
    text: ['', [Validators.required]]
  });

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  close(): void {
    this.activeModal.close();
  }

  onSend(): void {
    if (this.askForm.valid) {
      this.authService.askQuestion().subscribe((val) => {
        if (val) {
          this.activeModal.close();
        } 
      });
    }
    else {
      this.showErrors = true;
    }
  }
}
