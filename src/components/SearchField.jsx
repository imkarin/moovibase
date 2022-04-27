import React from 'react';
import SearchIcon from '../images/search-icon.svg';

const SearchField = (props) => {
  return (
    <div>
      <input 
        placeholder='Search for movies'
        type='text'
        value={props.searchTerm}
        onChange={(e) => { props.updateParentSearchTerm(e.target.value) }}
      />
      <button onClick={props.performSearchToParent}> 
        <img 
          src={SearchIcon}
          alt='Search icon'
          />
      </button>
    </div>
  )
}

export default SearchField;
