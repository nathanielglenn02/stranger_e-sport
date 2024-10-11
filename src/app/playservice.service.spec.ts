import { TestBed } from '@angular/core/testing';

import { PlayserviceService } from './playservice.service';

describe('PlayserviceService', () => {
  let service: PlayserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
