import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ngModuleJitUrl } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { TaskStatusPipe } from './status.pipe';
import { NgProgressModule } from 'ngx-progressbar';
import { RoundPipe } from './round.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NgProgressModule,
      ],
      declarations: [
        AppComponent,
        TaskStatusPipe,
        RoundPipe,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
