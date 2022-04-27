import React from 'react';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import SearchBar from './components/SearchBar';
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

  // arrow functions in jsx are bad practice, so replace with regular function
  function setSearchTermFromChild(term) {
    setSearchTerm(term);
  }

  function performSearch() {
    searchMovies(searchTerm)
      .then(foundMovies => setMovies(foundMovies))
  }

  return (
    <div className='app'>
      <h1 className={classes.myHeader}>Moovi</h1>

      <SearchBar 
        searchTerm={searchTerm}
        searchTermToParent={setSearchTermFromChild} 
        performSearchToParent={performSearch} 
        />

      <div className='container'>
        { movies?.length > 0
          ? (
            movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
          ) : (
            <p>No movies or series found</p>
          )
        }
      </div>
    </div>
  );
}

export default App;
