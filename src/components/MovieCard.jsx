import React from 'react';

const MovieCard = (props) => {
  const movie = props.movie;

  return (
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <figure>
        <img src={ movie.Poster !== 'N/A' ? movie.Poster : 'http://forkliftsystems.com.au/wp-content/uploads/2015/04/placeholder-600x400-400x400.png'} alt={`${movie.Title} poster`} />
        <figcaption>
          <p>{movie.Type}</p>
          <h3>{movie.Title}</h3>
        </figcaption>
      </figure>
    </div>
  )
}

export default MovieCard;
