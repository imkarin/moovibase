import React from 'react';
import SearchIcon from '../images/search-icon.svg';

const SearchBar = ({searchTerm, searchTermToParent, performSearchToParent}) => {
  return (
    <div className='search'>
        <input 
          placeholder='Search for movies'
          type='text'
          value={searchTerm}
          onChange={(e) => { searchTermToParent(e.target.value) }}
        />
        <button className='{classes.button}' onClick={performSearchToParent}> 
          <img 
            src={SearchIcon}
            alt='Search icon'
            className='{classes.searchIcon}'
            />
        </button>
      </div>
  )
}

export default SearchBar;
