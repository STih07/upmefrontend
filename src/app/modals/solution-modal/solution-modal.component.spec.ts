import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionModalComponent } from './solution-modal.component';

describe('SolutionModalComponent', () => {
  let component: SolutionModalComponent;
  let fixture: ComponentFixture<SolutionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
