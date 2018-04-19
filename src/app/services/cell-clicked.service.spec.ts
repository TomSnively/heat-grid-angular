import { TestBed, inject } from '@angular/core/testing';

import { CellClickedService } from './cell-clicked.service';

describe('CellClickedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CellClickedService]
    });
  });

  it('should be created', inject([CellClickedService], (service: CellClickedService) => {
    expect(service).toBeTruthy();
  }));
});
