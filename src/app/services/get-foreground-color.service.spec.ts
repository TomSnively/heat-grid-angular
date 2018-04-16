import { TestBed, inject } from '@angular/core/testing';

import { GetForegroundColorService } from './get-foreground-color.service';

describe('GetForegroundColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetForegroundColorService]
    });
  });

  it('should be created', inject([GetForegroundColorService], (service: GetForegroundColorService) => {
    expect(service).toBeTruthy();
  }));
});
