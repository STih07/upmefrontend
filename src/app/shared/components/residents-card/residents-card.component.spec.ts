import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsCardComponent } from './residents-card.component';

describe('ResidentsCardComponent', () => {
  let component: ResidentsCardComponent;
  let fixture: ComponentFixture<ResidentsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
