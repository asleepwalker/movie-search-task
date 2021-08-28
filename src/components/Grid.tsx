import React from 'react';
import Card from './Card';
import { Movie } from '../types';

interface Props {
  list: Movie[];
}

const Grid = ({ list }: Props) => (
  <div className="grid">
    {list.map((item: Movie, index: number) => (
      <Card
        key={`${item.imdbID}-${index}`}
        title={item.Title}
        year={item.Year}
        poster={item.Poster !== 'N/A' ? item.Poster : null}
      />
    ))}
  </div>
);

export default Grid;
