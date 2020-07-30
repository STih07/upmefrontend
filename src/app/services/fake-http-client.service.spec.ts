import { TestBed } from '@angular/core/testing';

import { FakeHttpClient } from './fake-http-client.service';

describe('FakeHttpClientService', () => {
  let service: FakeHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
