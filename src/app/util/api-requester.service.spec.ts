import { TestBed, inject } from '@angular/core/testing';

import { ApiRequesterService } from './api-requester.service';

describe('ApiRequesterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRequesterService]
    });
  });

  it('should be created', inject([ApiRequesterService], (service: ApiRequesterService) => {
    expect(service).toBeTruthy();
  }));
});
