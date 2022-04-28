import React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import FeaturedMovieBg from './images/mandalorian-bg.jpg';

import GlobalStyles from './components/styles/Global.styled';
import ContentWrapper from './components/styles/ContentWrapper.styled'; 
import Navigation from './components/Navigation';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

// Global theme
const theme = {
  colors: {
    nightsky: '#030304',
    slate: '#363F3E',
    slateLight: '#9EA8AB',
    cloud: '#F8F9F9',
    cloudDark: '#E4E4E4'
  },
  typography: {
    h1: {
      size: '33px',
      weight: '300' ,
      letterSpacing: '0.25px'
    },
    h2: {
      size: '23px',
      weight: '500',
      letterSpacing: '0'
    },
    h3: {
      size: '19px',
      weight: '600',
      letterSpacing: '0.15px'
    },
    body: {
      size: '16px',
      weight: '400',
      letterSpacing: '0.5px'
    },
    bodySmaller: {
      size: '14px',
      weight: '400',
      letterSpacing: '0.25px'
    },
    button: {
      size: '14px',
      weight: '500',
      letterSpacing: '1.25px'
    },
    caption: {
      size: '12px',
      weight: '400',
      letterSpacing: '0.4px'
    },
    overline: {
      size: '10px',
      weight: '400',
      letterSpacing: '1.5px'
    }
  }
}

// Omdb API
const API_URL = 'http://omdbapi.com/?apikey=88c7a902';

// App component
const App = () => {
  const [moviesTopFive, setMoviesTopFive] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const movies = await res.json().then(data => data.Search);
    return movies;
  }
  
  useEffect(() => {
    searchMovies('House')
      .then(foundMovies => setMoviesTopFive(foundMovies.slice(0, 5)));
  }, []);

  // arrow functions in jsx are bad practice, so replace with regular function
  function setSearchTermFromChild(term) {
    setSearchTerm(term);
  }

  function performSearch() {
    searchMovies(searchTerm)
      .then(foundMovies => {
        setMovies(foundMovies)
        setHasSearched(true)
      })
  }

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        {/* Navigation bar */}
        <Navigation />

        {/* Header contains the big featured movie image (bg) + search bar + top 5*/}
        <Header
          background={FeaturedMovieBg}
          searchTerm={searchTerm}
          updateParentSearchTerm={setSearchTermFromChild}
          performSearchToParent={performSearch}
          movies={moviesTopFive}
        />

        {/* Main contains search results section */}
        <main>
          <section style={{padding: '64px 0 64px'}}> {/* Movie search results */}
            <ContentWrapper>
              <div>
                { hasSearched ?
                (
                  // If user has searched, chech if there are movies and display them
                  movies?.length > 0 ?
                  (
                    <>
                      <h2>Results for: { searchTerm }</h2>
                      {
                        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
                      }
                    </>
                  ) : (
                    <h2>No movies found for: {searchTerm}</h2>
                  ) 
                ) : ( 
                    // If user hasn't searched yet, show 'Look for movie' msg
                    <p>Search for a movie</p>
                )
                }                
                
                

              </div> 
            </ContentWrapper>
          </section>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
