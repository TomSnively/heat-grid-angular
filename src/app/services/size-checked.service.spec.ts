import { TestBed, inject } from '@angular/core/testing';

import { SizeCheckedService } from './size-checked.service';

describe('SizeCheckedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SizeCheckedService]
    });
  });

  it('should be created', inject([SizeCheckedService], (service: SizeCheckedService) => {
    expect(service).toBeTruthy();
  }));
});
