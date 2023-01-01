import { TestBed } from '@angular/core/testing';

import { HomeContextHolderService } from './home-context-holder.service';

describe('HomeContextHolderService', () => {
  let service: HomeContextHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeContextHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
