import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { OmdbMovieDetailsResponse } from '../shared/models/omdb-api.interface';
import { getDecadeFromYear } from '../shared/utils/getDecadeFromYear';
import { MoviesState } from './movies.reducer';

export const selectMoviesFeature = (state: AppState) => state.movies;

export const selectDecade = createSelector(
  selectMoviesFeature,
  (state: MoviesState) => state.decade
);

export const selectMovies = createSelector(
  selectMoviesFeature,
  (state: MoviesState) => state.movies
);

export const selectVisibleMovies = createSelector(
  selectDecade,
  selectMovies,
  (decade: number | null, movies: OmdbMovieDetailsResponse[]) => {
    if (decade && movies) {
      return movies.filter(
        (movie: OmdbMovieDetailsResponse) =>
          getDecadeFromYear(+movie.Year) === decade
      );
    } else {
      return movies;
    }
  }
);

export const selectMovieDecades = createSelector(
  selectMovies,
  (movies: Array<OmdbMovieDetailsResponse>) =>
    [
      ...new Set(
        movies.map((movie: OmdbMovieDetailsResponse) =>
          getDecadeFromYear(+movie.Year)
        )
      ),
    ]
      .sort()
      .reverse()
);
