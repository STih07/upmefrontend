import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UniversalListPageComponent } from './universal-list-page.component';

describe('UniversalListPageComponent', () => {
  let component: UniversalListPageComponent;
  let fixture: ComponentFixture<UniversalListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniversalListPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
