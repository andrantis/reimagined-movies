import { Pipe, PipeTransform } from '@angular/core';
import { OmdbMovieDetailsResponse } from 'src/app/shared/models/omdb-api.interface';
import { getDecadeFromYear } from '../utils/getDecadeFromYear';

@Pipe({
  name: 'byDecade',
})
export class ByDecadePipe implements PipeTransform {
  transform(movies: OmdbMovieDetailsResponse[], decade: number | null): any {
    if (!movies || !decade ) {
      return movies;
    }

    return movies.filter((movie) => decade === getDecadeFromYear(+movie.Year));
  }
}
