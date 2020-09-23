import { TestBed } from '@angular/core/testing';

import { FakeHttpService } from './fake-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FakeHttpService', () => {
  let service: FakeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FakeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
