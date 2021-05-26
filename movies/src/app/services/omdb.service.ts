import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';
import {
  OmdbMovieDetailsResponse,
  OmdbMovieResponse,
  OmdbSearchResponse,
} from '../shared/models/omdb-api.interface';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  baseUrl = this.config.getConfig().omdb.url;

  params = {
    apiKey: this.config.getConfig().omdb.key,
  };

  constructor(private config: ConfigService, private http: HttpClient) {}

  searchByTtitle(query: string): Observable<OmdbMovieDetailsResponse[]> {
    const params = {
      ...this.params,
      s: query,
      type: 'movie',
    };

    return this.http.get<OmdbSearchResponse>(this.baseUrl, { params }).pipe(
      switchMap((results: OmdbSearchResponse) => {
        const resultsWithDetails = results.Search.map(
          (movie: OmdbMovieResponse) => this.getById(movie.imdbID)
        );
        return forkJoin(resultsWithDetails);
      }),
      map((results: OmdbMovieDetailsResponse[]) =>
        results.sort(compareYearDescFn)
      ),
      // shareReplay(1)
      catchError(this.handleError)
    );
  }

  getById(id: string): Observable<OmdbMovieDetailsResponse> {
    const params = { ...this.params, i: id };
    return this.http
      .get<OmdbMovieDetailsResponse>(this.baseUrl, { params })
      .pipe(catchError(this.handleError));
  }

  handleError(err: any) {
    const error: any = {};
    if (err instanceof HttpErrorResponse && err.error === null) {
      error.message = err.message;
    } else if (err instanceof HttpErrorResponse) {
      error.title = err.error.title;
      error.message = err.error.message;
    } else if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      error.title = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      error.message = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    return throwError(error);
  }
}

const compareYearDescFn = (
  a: OmdbMovieDetailsResponse,
  b: OmdbMovieDetailsResponse
) => {
  if (+a.Year < +b.Year) return 1;
  if (+a.Year > +b.Year) return -1;
  return 0;
};
