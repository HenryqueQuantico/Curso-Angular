import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCursesComponent } from './each-curses.component';

describe('EachCursesComponent', () => {
  let component: EachCursesComponent;
  let fixture: ComponentFixture<EachCursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachCursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachCursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
