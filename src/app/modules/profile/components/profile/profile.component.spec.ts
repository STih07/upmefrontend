import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile.component';
import { TaskStatusPipe } from '../../pipes/status.pipe';
import { RoundPipe } from '../../pipes/round.pipe';
import { AbsPipe } from '../../pipes/abs.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        TaskStatusPipe,
        RoundPipe,
        AbsPipe
      ],
      imports: [
        RouterTestingModule,
        ToastrModule.forRoot(),
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
