import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
@Component({
  selector: 'upme-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  
  showPassword: boolean;
  showErrors: boolean;
  askForm: FormGroup = this.fb.group({
    input: ['', [Validators.minLength(1), Validators.required]]
  });
  
  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private authService: AuthService,
    private modal: NgbModal
) { }

  ngOnInit() {
  }
  
  close(): void {
    this.activeModal.close();
  }

  onSubmit():void {
    this.authService.askQuestion().subscribe((val) => {
      if (this.askForm.valid) {   
        this.modal.dismissAll();  
      } else {    
        console.log("Форма пустая");        
      }
    })
  }
}
