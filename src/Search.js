import React, { useState } from 'react';
import SearchResult from './SearchResult';
const Search = () => {
  const [image, setImage] = useState('');

  const inputEvent = (image) => {
    setImage(image.target.value);
  };
  return (
    <>
      <div className='text-center mt-20'>
        <h1>Welcome to the Search Page</h1>
        <input
          type='text'
          name='search'
          placeholder='Search Item'
          className='mb-20'
          value={image}
          onChange={inputEvent}
        />
        {image === '' ? null : <SearchResult name={image} />}
      </div>
    </>
  );
};
export default Search;
