import { TestBed } from '@angular/core/testing';

import { SurvService } from './surv.service';

describe('SurvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurvService = TestBed.get(SurvService);
    expect(service).toBeTruthy();
  });
});
