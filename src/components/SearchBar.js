import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" checked={null} onChange={e=>props.alph(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" checked={null} onChange={e=>props.price(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={e=>props.filter(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
