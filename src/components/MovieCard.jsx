import React from 'react';
import styled from 'styled-components'

const StyledMovieCard = styled.div`
  background-color: ${({theme}) => theme.colors.nightsky };
  box-shadow: 0 8px 24px 12px #121a1c20;

  > figure {
    position: relative;
    height: 121px;

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 50% 55%;
    }

    > figcaption {
      position: absolute;
      top: 0;
      height: calc(100% + 11px);
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 0 16px;

      > h3 {
        color: ${({theme}) => theme.colors.cloud};
        max-width: 160px;
        // margin-bottom: -6px;
      }

      > p {
        // margin-bottom: -5px;
      }
    }
  }

  // Year
  > div {
    padding: 19px 16px 18px;

    > p {
      color: ${({theme}) => theme.colors.slateLight };
    }
  }
`

const MovieCard = (props) => {
  const movie = props.movie;

  return (
    <StyledMovieCard className='movie'>
      <figure>
        <img style={{maxWidth: '100%'}} src={ movie.Poster !== 'N/A' ? movie.Poster : 'http://forkliftsystems.com.au/wp-content/uploads/2015/04/placeholder-600x400-400x400.png'} alt={`${movie.Title} poster`} />
        <figcaption>
          <h3>{movie.Title}</h3>
          <p className='body-smaller'>{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</p>
        </figcaption>
      </figure>
      <div>
        <p className='body-smaller'>{movie.Year}</p>
      </div>
    </StyledMovieCard>
  )
}

export default MovieCard;
