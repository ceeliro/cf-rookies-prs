import { TestBed } from '@angular/core/testing';

import { CeeliroCommonService } from './ceeliro-common.service';

describe('CeeliroCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeeliroCommonService = TestBed.get(CeeliroCommonService);
    expect(service).toBeTruthy();
  });
});
