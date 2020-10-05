import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ArchiveModalComponent } from './archive-modal.component';

describe('ArchiveModalComponent', () => {
  let component: ArchiveModalComponent;
  let fixture: ComponentFixture<ArchiveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveModalComponent],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveModalComponent);
    component = fixture.componentInstance;
    component.user = {
      users: ['infoAboutUser'],
      name: 'name',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
