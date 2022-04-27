import React from 'react';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import Logo from './images/logo.png';
import FeaturedMovieBg from './images/mandalorian-bg.png';
import SearchField from './components/SearchField';
import MovieCard from './components/MovieCard';

// Create styles
const useStyles = createUseStyles({
  "@global": {
    html: {
      boxSizing: 'border-box',

      '& *, *:before, *:after': {
        margin: 0,
        padding: 0,
        boxSizing: 'inherit'
      }
    },
    '.app': {
      height: '100vh',
    }
  },
  navigation: {
    margin: 0,
    padding: 32,

    '& > .wrapper': {
      width: '100%',
      margin: '0 auto',
      maxWidth: 1680
    }
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    width: '100%',
    height: 'calc(100% - 64px)',
    backgroundColor: 'black',
    backgroundImage: `url(${FeaturedMovieBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  main: {
    position: 'relative',
    width: '100%',
    height: 'calc(100% - 32px - 32px - 22px - 64px)',  // height = header's height - navigation's height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& > .section-wrapper': {
      width: '100%',
      maxWidth: 1680,
      padding: 32,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: 32,

      '&.section-search': {
        margin: 'auto',

        
        '& > .search-field-container': {
          gridColumn: '4 / 10',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'center',
          gap: 48
        }
      },

      '&.section-top5': {
        transform: 'translateY(32px)',
        height: 206,
        
        '& > .text-wrapper': {
          gridColumn: '1 / 3',
        },

        '& > .movies-wrapper': {
          gridColumn: '3 / 13',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 32,
          gridAutoFlow: 'row',
        }
      }
    }
  }
});

const API_URL = 'http://omdbapi.com/?apikey=88c7a902';

const App = () => {
  // Use jss classes defined above
  const classes = useStyles();
  const [moviesTopFive, setMoviesTopFive] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const movies = await res.json().then(data => data.Search);
    return movies;
  }
  
  useEffect(() => {
    searchMovies('The Batman')
      .then(foundMovies => setMoviesTopFive(foundMovies));
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
      {/* Navigation bar */}
      <nav className={classes.navigation}>
        <div className='wrapper'>
          <img src={Logo} alt="MooviBase logo" />
        </div>
      </nav>

      {/* Header contains the big featured movie image */}
      <header className={classes.header}></header>

      {/* Main contains search section + movies section */}
      <main className={classes.main}>
        <section className='section-wrapper section-search'>
          <div className='search-field-container'>
            <h1>
              Find the perfect movie for your evening
            </h1>
            <SearchField 
              searchTerm={searchTerm}
              searchTermToParent={setSearchTermFromChild} 
              performSearchToParent={performSearch} 
            />
          </div>

        </section>
        <section className='section-wrapper section-top5'>
          <div className='text-wrapper'>
            <h2>Top five of last week</h2>
            <p>Actually these are totally random</p>
          </div>

          <div className='movies-wrapper'>
            {
              moviesTopFive?.length > 0 ? (
                moviesTopFive.slice(0, 5).map(movie => (
                  <MovieCard movie={movie} />
                ))
              ) :
              (
                'No top five found'
              )
            }
          </div>
        </section>
      </main>

      


      <div className='results-container'>
        { movies?.length > 0
          ? (
            movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
          ) : (
            ''
          )
        }
      </div> 
    </div>
  );
}

export default App;
