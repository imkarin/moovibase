import React from 'react'
import styled from 'styled-components'
import MovieCard from './MovieCard'
import ContentWrapper from './styles/ContentWrapper.styled'

const StyledTopFiveMovies = styled.section`
  text-align: left;

  // Contentwrapper
  > div {
    height: 100%;

    // Text
    > .top5-text {
      grid-column: 1 / 3;
      margin-top: 38px;
      
      h2 {
      color: ${({theme}) => theme.colors.cloud };
      margin-bottom: 12px;
    }

    p {
      color: ${({theme}) => theme.colors.slateLight}
    } 
    }

    // Moviecards
    > .top5-movies {
      grid-column: 3 / 13;
      background: transparent;
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      grid-gap: 32px;
    }
  }
`

const TopFiveMovies = ({movies}) => {
  return (
    <StyledTopFiveMovies className='top-five-movies'>
      <ContentWrapper>
        <div className='top5-text'>
          <h2>Top five of last week</h2>
          <p className='caption'>Actually they're totally random</p>
        </div>

        <div className='top5-movies'>
          { movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </ContentWrapper>
    </StyledTopFiveMovies>
  )
}

export default TopFiveMovies
