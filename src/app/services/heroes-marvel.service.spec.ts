import { TestBed } from '@angular/core/testing';

import { HeroesMarvelService } from './heroes-marvel.service';

describe('HeroesMarvelService', () => {
  let service: HeroesMarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesMarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
