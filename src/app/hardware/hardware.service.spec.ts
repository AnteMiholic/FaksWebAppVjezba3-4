import { TestBed } from '@angular/core/testing';

import { HardwareService } from './hardware.service';

describe('HardwareServiceService', () => {
  let service: HardwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
