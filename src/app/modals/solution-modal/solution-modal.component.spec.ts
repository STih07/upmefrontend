import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from 'ngx-progressbar';

import { SolutionModalComponent } from './solution-modal.component';

describe('SolutionModalComponent', () => {
  let component: SolutionModalComponent;
  let fixture: ComponentFixture<SolutionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionModalComponent ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionModalComponent);
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
