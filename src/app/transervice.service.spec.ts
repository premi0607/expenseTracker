import { TestBed } from '@angular/core/testing';

import { TranserviceService } from './transervice.service';

describe('TranserviceService', () => {
  let service: TranserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
