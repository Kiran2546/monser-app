import React from 'react';
import './../Search-Box-comp/searchBox-Style-comp.css';

export const SearchBox = ({ placeHolder, handHandler }) => {
  return (
    <div>
      <input
        type="search"
        className="inputBox"
        name="searchBox"
        placeholder={placeHolder}
        onChange={handHandler}
      />
    </div>
  );
};
