import { TestBed } from '@angular/core/testing';

import { MyCookiesService } from './my-cookies.service';

describe('MyCookiesService', () => {
  let service: MyCookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
