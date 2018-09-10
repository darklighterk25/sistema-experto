import { TestBed, inject } from '@angular/core/testing';

import { MethodologiesService } from './methodologies.service';

describe('MethodologiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MethodologiesService]
    });
  });

  it('should be created', inject([MethodologiesService], (service: MethodologiesService) => {
    expect(service).toBeTruthy();
  }));
});
