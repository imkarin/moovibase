import React from 'react';
import SearchIcon from '../images/search-icon.svg';
import styles from './SearchField.styles';

const SearchField = ({searchTerm, searchTermToParent, performSearchToParent}) => {
  const classes = styles();

  return (
    <div>
      <input 
        placeholder='Search for movies'
        type='text'
        value={searchTerm}
        onChange={(e) => { searchTermToParent(e.target.value) }}
      />
      <button className={classes.button} onClick={performSearchToParent}> 
        <img 
          src={SearchIcon}
          alt='Search icon'
          className={classes.searchIcon}
          />
      </button>
    </div>
  )
}

export default SearchField;
