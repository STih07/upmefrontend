import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitModalComponent } from './submit-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';


describe('SubmitModalComponent', () => {
  let component: SubmitModalComponent;
  let fixture: ComponentFixture<SubmitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitModalComponent],
      imports: [ToastrModule.forRoot()],
      providers: [NgbActiveModal, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitModalComponent);
    component = fixture.componentInstance;
    component.user = {
      users: ['infoAboutUser'],
      name: 'name',
      solution: 'solution'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
