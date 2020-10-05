import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionComponent } from './direction.component';
import { TaskStatus } from '../../pipe/status-task.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DirectionsComponent', () => {
  let component: DirectionComponent;
  let fixture: ComponentFixture<DirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectionComponent,
        TaskStatus
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
