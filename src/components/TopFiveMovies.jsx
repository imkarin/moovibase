import React from 'react'
import styled from 'styled-components'
import ContentWrapper from './styles/ContentWrapper.styled'

const StyledTopFiveMovies = styled.section`
  height: 206px;
  margin-top: -174px;
  text-align: left;
  
  h2 {
    color: ${({theme}) => theme.colors.cloud };
    margin-bottom: 12px;
  }

  p {
    color: ${({theme}) => theme.colors.slateLight}
  }

  > div { // Contentwrapper
    height: 100%;
    
    > div:first-child { // Text
      grid-column: 1 / 3;
      margin-top: 38px;
    }

    >div:nth-child(2) { // Moviecards
      grid-column: 3 / 13;
      background: ${({theme}) => theme.colors.nightsky};
      opacity: 0.7;
      height: 100%;
    }
  }
`

const TopFiveMovies = () => {
  return (
    <StyledTopFiveMovies className='top-five-movies'>
      <ContentWrapper>
        <div>
          <h2>Top five of last week</h2>
          <p className='caption'>Actually they're totally random</p>
        </div>

        <div>

        </div>
      </ContentWrapper>
    </StyledTopFiveMovies>
  )
}

export default TopFiveMovies
