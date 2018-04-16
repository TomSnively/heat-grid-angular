import { TestBed, inject } from '@angular/core/testing';

import { GetBackgroundColorService } from './get-background-color.service';

describe('GetBackgroundColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBackgroundColorService]
    });
  });

  it('should be created', inject([GetBackgroundColorService], (service: GetBackgroundColorService) => {
    expect(service).toBeTruthy();
  }));
});
