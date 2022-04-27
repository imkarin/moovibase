import React from 'react';
import { useEffect, useState } from 'react';

import FeaturedMovieBg from './images/mandalorian-bg.png';

import ContentWrapper from './components/styles/ContentWrapper.styled'; 
import Navigation from './components/Navigation';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

const API_URL = 'http://omdbapi.com/?apikey=88c7a902';

const App = () => {
  // Use jss classes defined above
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
    searchMovies('The Batman')
      .then(foundMovies => setMoviesTopFive(foundMovies));
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
      {/* Navigation bar */}
      <Navigation />

      {/* Header contains the big featured movie image + search bar*/}
      <Header
        background={FeaturedMovieBg}
        searchTerm={searchTerm}
        updateParentSearchTerm={setSearchTermFromChild}
        performSearchToParent={performSearch}
      />

      {/* Main contains top 5 section + search results section */}
      <main>
        <section> {/* Top 5 */}
          <ContentWrapper>
            <div>
              <h2>Top five of last week</h2>
              <p>Actually these are totally random</p>
            </div>

            <div>
              {
                moviesTopFive?.length > 0 ? (
                  moviesTopFive.slice(0, 5).map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                  ))
                ) :
                (
                  'No top five found'
                )
              }
            </div>
          </ContentWrapper>
        </section>

        <section> {/* Movie search results */}
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
                  <p>No movies found for: {searchTerm}</p>
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
    </div>
  );
}

export default App;
