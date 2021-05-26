import { OmdbMovieDetailsResponse } from '../shared/models/omdb-api.interface';
import { MoviesState } from './movies.reducer';

export interface AppState {
  movies: MoviesState
}