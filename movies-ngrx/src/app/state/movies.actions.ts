import { createAction, props } from '@ngrx/store';
import { OmdbMovieDetailsResponse } from '../shared/models/omdb-api.interface';

export const searchByTitle = createAction(
  '[OMDB/API] Search By Title',
  props<{ title: string }>()
);

export const searchByTitleSuccess = createAction(
  '[OMDB/API] Search By Title Success',
  props<{ movies: Array<OmdbMovieDetailsResponse> }>()
);

export const searchByTitleFailure = createAction(
  '[OMDB/API] Search By Title Failure',
  props<{ error: string }>()
);

export const selectDecade = createAction(
  '[Movies>] Select Decade',
  props<{ decade: number | null }>()
);
