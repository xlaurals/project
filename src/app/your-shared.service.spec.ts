import { TestBed } from '@angular/core/testing';

import { YourSharedService } from './your-shared.service';

describe('YourSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourSharedService = TestBed.get(YourSharedService);
    expect(service).toBeTruthy();
  });
});
