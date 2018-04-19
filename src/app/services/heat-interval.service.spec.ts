import { TestBed, inject } from '@angular/core/testing';

import { HeatIntervalService } from './heat-interval.service';

describe('HeatIntervalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeatIntervalService]
    });
  });

  it('should be created', inject([HeatIntervalService], (service: HeatIntervalService) => {
    expect(service).toBeTruthy();
  }));
});
