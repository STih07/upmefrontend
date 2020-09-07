import { TestBed } from '@angular/core/testing';

import { FakeHttpService } from './fake-http.service';

describe('FakeHttpService', () => {
  let service: FakeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
