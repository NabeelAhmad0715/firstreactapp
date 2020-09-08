import React from 'react';

const SearchResult = (props) => {
  const image = `https://source.unsplash.com/400x400/?${props.name}`;

  return (
    <>
      <div className='text-center mb-20'>
        <img src={image} alt='Search' />
      </div>
    </>
  );
};
export default SearchResult;
