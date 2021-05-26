import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getDecadeFromYear } from '../../shared/utils/getDecadeFromYear';

@Component({
  selector: 'app-movie-decade-filter',
  templateUrl: './movie-decade-filter.component.html',
  styleUrls: ['./movie-decade-filter.component.scss'],
})
export class MovieDecadeFilterComponent implements OnInit {
  @Input() movies: any;
  @Output() selectDecade: EventEmitter<number | null> = new EventEmitter();

  decades: number[] = [];
  selected: number | null = null;

  ngOnInit(): void {
    this.decades =
      this.movies &&
      [
        ...new Set(
          this.movies.map((movie: any) => getDecadeFromYear(+movie.Year))
        ),
      ]
        .sort()
        .reverse();
  }

  onClick(decade: number | null) {
    this.selected === decade
      ? (this.selected = null)
      : (this.selected = decade);

    this.selectDecade.emit(this.selected);
  }
}
