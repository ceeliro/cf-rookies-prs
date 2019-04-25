import { TestBed } from '@angular/core/testing';

import { CeeliroOauthService } from './ceeliro-oauth.service';

describe('CeeliroOauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeeliroOauthService = TestBed.get(CeeliroOauthService);
    expect(service).toBeTruthy();
  });
});
