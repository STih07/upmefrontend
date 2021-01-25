import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPassComponent } from './recover-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecoverPassComponent', () => {
  let component: RecoverPassComponent;
  let fixture: ComponentFixture<RecoverPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverPassComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
