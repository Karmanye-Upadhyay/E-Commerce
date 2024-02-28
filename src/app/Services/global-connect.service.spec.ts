import { TestBed } from '@angular/core/testing';

import { GlobalConnectService } from './global-connect.service';

describe('GlobalConnectService', () => {
  let service: GlobalConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
