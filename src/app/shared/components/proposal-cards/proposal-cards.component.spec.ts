import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalCardsComponent } from './proposal-cards.component';

describe('ProposalCardsComponent', () => {
  let component: ProposalCardsComponent;
  let fixture: ComponentFixture<ProposalCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
