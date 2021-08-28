import React from 'react';

interface Props {
  title: string;
  year: string;
  poster: string | null;
}

const Card = ({ title, year, poster }: Props) => (
  <div className="card">
    <div className="poster">
      {poster && <img src={poster} alt={title} />}
    </div>
    <div className="title">{title} ({year})</div>
  </div>
);

export default Card;
