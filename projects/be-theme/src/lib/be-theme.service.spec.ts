import { TestBed } from '@angular/core/testing';

import { BeThemeService } from './be-theme.service';

describe('BeThemeService', () => {
  let service: BeThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
