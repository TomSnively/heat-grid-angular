import { TestBed, inject } from '@angular/core/testing';

import { InitializeGridDataService } from './initialize-grid-data.service';

describe('InitializeGridDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitializeGridDataService]
    });
  });

  it('should be created', inject([InitializeGridDataService], (service: InitializeGridDataService) => {
    expect(service).toBeTruthy();
  }));
});
