import { createReducer, on, Action } from '@ngrx/store';
import { OmdbMovieDetailsResponse } from '../shared/models/omdb-api.interface';
import { searchByTitleSuccess, selectDecade } from './movies.actions';

export interface MoviesState {
  movies: Array<OmdbMovieDetailsResponse>;
  decade: number | null;
}

export const initialState: MoviesState = {
  movies: [],
  decade: null,
};

export const moviesReducer = createReducer(
  initialState,
  on(searchByTitleSuccess, (state, { movies }) => ({ ...state, movies })),
  on(selectDecade, (state, { decade }) => ({ ...state, decade }))
);

export function reducer(state: MoviesState | undefined, action: Action) {
  return moviesReducer(state, action);
}
