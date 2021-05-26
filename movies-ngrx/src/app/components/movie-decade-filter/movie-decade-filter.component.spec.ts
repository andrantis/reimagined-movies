import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDecadeFilterComponent } from './movie-decade-filter.component';

describe('MovieDecadeFilterComponent', () => {
  let component: MovieDecadeFilterComponent;
  let fixture: ComponentFixture<MovieDecadeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDecadeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDecadeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
