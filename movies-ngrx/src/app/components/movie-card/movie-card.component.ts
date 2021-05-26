import { Component, Input } from '@angular/core';
import { OmdbMovieDetailsResponse } from '../../shared/models/omdb-api.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: OmdbMovieDetailsResponse | null = null;
}
