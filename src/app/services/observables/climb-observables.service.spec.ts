import { TestBed } from '@angular/core/testing';

import { ClimbObservablesService } from './climb-observables.service';

describe('ClimbObservablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClimbObservablesService = TestBed.get(ClimbObservablesService);
    expect(service).toBeTruthy();
  });
});
