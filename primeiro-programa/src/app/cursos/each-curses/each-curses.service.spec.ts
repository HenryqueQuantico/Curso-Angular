import { TestBed } from '@angular/core/testing';

import { EachCursesService } from './each-curses.service';

describe('EachCursesService', () => {
  let service: EachCursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EachCursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
