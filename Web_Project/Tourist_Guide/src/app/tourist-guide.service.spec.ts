import { TestBed } from '@angular/core/testing';

import { TouristGuideService } from './tourist-guide.service';

describe('TouristGuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristGuideService = TestBed.get(TouristGuideService);
    expect(service).toBeTruthy();
  });
});
