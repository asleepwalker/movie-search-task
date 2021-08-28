import React, { useState, useCallback } from 'react';

interface Props {
  onSubmit: (value: string) => void;
}

const Form = ({ onSubmit }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit(value);
  }, [value, onSubmit]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="search" placeholder="Type the movie name..." value={value} onChange={handleChange} />
      <button type="submit" disabled={value.length < 3}>Search</button>
    </form>
  );
};

export default Form;
