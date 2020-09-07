import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitModalComponent } from './submit-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('SubmitModalComponent', () => {
  let component: SubmitModalComponent;
  let fixture: ComponentFixture<SubmitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitModalComponent],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitModalComponent);
    component = fixture.componentInstance;
    component.user = {
      username: 'name',
      solution: 'solution'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
        expect(component).toBeTruthy();
  });
});
