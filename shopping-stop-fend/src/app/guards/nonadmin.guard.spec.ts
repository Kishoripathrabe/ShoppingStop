import { TestBed } from '@angular/core/testing';

import { NonadminGuard } from './nonadmin.guard';

describe('NonadminGuard', () => {
  let guard: NonadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
