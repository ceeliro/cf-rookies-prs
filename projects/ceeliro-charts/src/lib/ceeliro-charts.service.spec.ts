import { TestBed } from '@angular/core/testing';

import { CeeliroChartsService } from './ceeliro-charts.service';

describe('CeeliroChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeeliroChartsService = TestBed.get(CeeliroChartsService);
    expect(service).toBeTruthy();
  });
});
