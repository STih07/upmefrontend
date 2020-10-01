import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsComponent } from './directions.component';
import { TaskStatus } from '../../pipe/status-task.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DirectionsComponent', () => {
  let component: DirectionsComponent;
  let fixture: ComponentFixture<DirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectionsComponent,
        TaskStatus
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
