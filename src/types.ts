export interface Response {
  Response: 'True' | 'Error';
  Search: Movie[];
  totalResults: number;
}

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}
