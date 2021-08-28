import React, { useState, useCallback } from 'react';

import Form from './components/Form';
import Grid from './components/Grid';
import Counter from './components/Counter';
import { searchApi } from './api/search';
import { Response, Movie } from './types';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState<Movie[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  const handleSearch = useCallback((value: string) => {
    searchApi(value)
      .then((data: Response) => {
        setValue(value);
        setList(data.Search);
        setTotal(data.totalResults);
        setPage(1);
      })
      .catch(() => alert('Error occured! Try again'));
  }, []);

  const handleLoadMore = useCallback(() => {
    const nextPage = page + 1;
    searchApi(value, nextPage)
      .then((data: Response) => {
        setList([...list, ...data.Search]);
        setPage(nextPage);
      })
      .catch(() => alert('Error occured! Try again'));
  }, [value, list, page]);

  return (
    <div className="App">
      <Form onSubmit={handleSearch} />
      <Grid list={list} />
      <Counter items={list.length} total={total} onLoadMore={handleLoadMore} />
    </div>
  );
}

export default App;
