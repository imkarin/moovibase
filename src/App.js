import React from 'react';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import SearchIcon from './images/search-icon.svg';
import MovieCard from './components/MovieCard';

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
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const movies = await res.json().then(data => data.Search);
    return movies;
  }
  
  useEffect(() => {
    searchMovies('The Batman')
      .then(foundMovies => setMovies(foundMovies));
  }, []);

  return (
    <div className='app'>
      <h1 className={classes.myHeader}>Moovi</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies'
          type='text'
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        <button className={classes.button}> 
          <img 
            src={SearchIcon}
            alt='Search icon'
            onClick={() => {
              searchMovies(searchTerm)
                .then(foundMovies => setMovies(foundMovies))
            }}
            className={classes.searchIcon}
            />
        </button>
      </div>

      <div className='container'>
        { movies?.length > 0
          ? (
            movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
          ) : (
            'Loading movies...'
          )
        }
      </div>
    </div>
  );
}

export default App;
