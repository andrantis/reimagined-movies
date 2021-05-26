import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OmdbMovieDetailsResponse } from './shared/models/omdb-api.interface';
import { OmdbService } from './services/omdb.service';
import { select, Store } from '@ngrx/store';
import { searchByTitleSuccess, selectDecade } from './state/movies.actions';
import {
  selectMovieDecades,
  // selectMoviesByDecade,
  // selectMovieDecades,
  selectVisibleMovies,
} from './state/movies.selectors';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movies$ = this.store.pipe(select(selectVisibleMovies));
  decades$ = this.store.pipe(select(selectMovieDecades));

  constructor(private omdb: OmdbService, private store: Store<AppState>) {
    this.omdb
      .searchByTtitle('batman')
      .subscribe((movies: Array<OmdbMovieDetailsResponse>) =>
        this.store.dispatch(searchByTitleSuccess({ movies }))
      );
  }

  onDecadeSelection(decade: number | null) {
    this.store.dispatch(selectDecade({decade}))
  }
}
