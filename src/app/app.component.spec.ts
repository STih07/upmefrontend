import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ngModuleJitUrl } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { TaskStatusPipe } from './status.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxSmartModalModule.forRoot(),
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
        TaskStatusPipe,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});