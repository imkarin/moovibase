import React from 'react';

const MovieCard = (props) => {
  const movie = props.movie;

  return (
    <div className='movie'>
      <figure>
        <img style={{maxWidth: '100%'}} src={ movie.Poster !== 'N/A' ? movie.Poster : 'http://forkliftsystems.com.au/wp-content/uploads/2015/04/placeholder-600x400-400x400.png'} alt={`${movie.Title} poster`} />
        <figcaption>
          <p>{movie.Type}</p>
          <h3>{movie.Title}</h3>
        </figcaption>
      </figure>
      <div>
        <p>{movie.Year}</p>
      </div>
    </div>
  )
}

export default MovieCard;
