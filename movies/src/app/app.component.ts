import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OmdbMovieDetailsResponse } from './shared/models/omdb-api.interface';
import { OmdbService } from './services/omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movies$: Observable<OmdbMovieDetailsResponse[]>;
  decade: number | null = null;

  constructor(private omdb: OmdbService) {
    this.movies$ = this.omdb.searchByTtitle('batman');
  }

  onDecadeSelection(decade: number | null) {
    this.decade = decade;
  }
}
