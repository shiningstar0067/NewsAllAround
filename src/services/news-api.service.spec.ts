import { TestBed } from '@angular/core/testing';

import { NewsApiService } from '../Services/news-api.service';

describe('NewsApiService', () => {
  let service: NewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
