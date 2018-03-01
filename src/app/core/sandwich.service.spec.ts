import { TestBed, inject } from '@angular/core/testing';

import { SandwichService } from './sandwich.service';

describe('SandwichService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SandwichService]
    });
  });

  it('should be created', inject([SandwichService], (service: SandwichService) => {
    expect(service).toBeTruthy();
  }));
});
