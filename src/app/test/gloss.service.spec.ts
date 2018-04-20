import { TestBed, inject } from '@angular/core/testing';

import { GlossService } from './gloss.service';

describe('GlossService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlossService]
    });
  });

  it('should be created', inject([GlossService], (service: GlossService) => {
    expect(service).toBeTruthy();
  }));
});
