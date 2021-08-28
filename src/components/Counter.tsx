import React from 'react';

const Counter = ({ items, total, onLoadMore }: any) => (
  <div className="counter">
    {items > 0 && <div>Showing {items} of {total}</div>}
    {items < total && <button className="load-more" onClick={onLoadMore}>Load More</button>}
  </div>
);

export default Counter;
