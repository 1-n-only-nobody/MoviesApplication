import { TestBed, inject } from '@angular/core/testing';

import { MoviereviewService } from './moviereview.service';

describe('MoviereviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviereviewService]
    });
  });

  it('should be created', inject([MoviereviewService], (service: MoviereviewService) => {
    expect(service).toBeTruthy();
  }));
});
