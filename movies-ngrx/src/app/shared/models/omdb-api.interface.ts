export interface OmdbSearchResponse {
  Search: OmdbMovieResponse[];
  totalResults: string;
  Response: string;
}

export interface OmdbMovieResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface OmdbMovieDetailsResponse extends OmdbMovieResponse {
  Rated: string;
  Released: string;
  Runtime: string;
  Plot: string;
}
