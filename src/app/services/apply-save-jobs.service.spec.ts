import { TestBed } from '@angular/core/testing';

import { ApplySaveJobsService } from './apply-save-jobs.service';

describe('ApplySaveJobsService', () => {
  let service: ApplySaveJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplySaveJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
