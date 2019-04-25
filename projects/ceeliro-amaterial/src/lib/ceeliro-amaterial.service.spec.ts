import { TestBed } from '@angular/core/testing';

import { CeeliroAmaterialService } from './ceeliro-amaterial.service';

describe('CeeliroAmaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeeliroAmaterialService = TestBed.get(CeeliroAmaterialService);
    expect(service).toBeTruthy();
  });
});
