import { TestBed } from '@angular/core/testing';

import { UserObservablesService } from './user-observables.service';

describe('UserObservablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserObservablesService = TestBed.get(UserObservablesService);
    expect(service).toBeTruthy();
  });
});
