import React from 'react';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import SearchIcon from './images/search-icon.svg';

// Create styles
const useStyles = createUseStyles({
  myHeader: {
    color: 'green'
  },
  searchIcon: {
    width: 24,
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  button: {
    cursor: 'pointer'
  }
});

const API_URL = 'http://omdbapi.com/?i=tt3896198&apikey=88c7a902';

const App = () => {
  // Use jss classes defined above
  const classes = useStyles();
  const [movies, setMovies] = useState(null);

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const movies = await res.json().then(data => data.Search);
    return movies;
  }
  
  useEffect(() => {
    searchMovies('The batman')
      .then(foundMovies => setMovies(foundMovies));
  });

  return (
    <div className='app'>
      <h1 className={classes.myHeader}>Moovi</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies'
          type='text'
          value='The Batman'
          onChange={() => {}}
        />
        <button className={classes.button}> 
          <img 
            src={SearchIcon}
            alt='Search icon'
            onClick={() => {}}
            className={classes.searchIcon}
            />
        </button>
      </div>

      <div className='container'>
        { movies ? (
          <ul>
            { movies.map((movie, index) => (
              <li key={index}>
                <img src={movie.Poster} />
                <p>{movie.Title}</p>
              </li>
            )) }
          </ul>
          ) :
          'Loading movies...'
        }
      </div>
    </div>
  );
}

export default App;
