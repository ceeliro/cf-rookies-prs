import { TestBed } from '@angular/core/testing';

import { CeeliroFormsService } from './ceeliro-forms.service';

describe('CeeliroFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeeliroFormsService = TestBed.get(CeeliroFormsService);
    expect(service).toBeTruthy();
  });
});
