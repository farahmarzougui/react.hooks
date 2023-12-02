import React from 'react';

const Filter = ({ handleFilterTitle, handleFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => handleFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par rating"
        onChange={(e) => handleFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;