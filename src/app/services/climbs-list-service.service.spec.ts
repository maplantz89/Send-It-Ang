import { TestBed } from '@angular/core/testing';

import { ClimbsListServiceService } from './climbs-list-service.service';

describe('ClimbsListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClimbsListServiceService = TestBed.get(ClimbsListServiceService);
    expect(service).toBeTruthy();
  });
});
