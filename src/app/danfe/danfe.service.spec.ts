import { TestBed } from '@angular/core/testing';

import { DanfeService } from './danfe.service';

describe('DanfeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DanfeService = TestBed.get(DanfeService);
    expect(service).toBeTruthy();
  });
});
