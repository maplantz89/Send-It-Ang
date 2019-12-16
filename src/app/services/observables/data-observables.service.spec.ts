import { TestBed } from '@angular/core/testing';

import { DataObservablesService } from './data-observables.service';

describe('DataObservablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataObservablesService = TestBed.get(DataObservablesService);
    expect(service).toBeTruthy();
  });
});
