import React from 'react'
import styled from 'styled-components'

import ContentWrapper from './styles/ContentWrapper.styled'
import SearchField from './SearchField'
import TopFiveMovies from './TopFiveMovies'

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: calc(100% - 64px);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
  z-index: 0;

  > .background-gradient {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0) 60%);
  }

  // ContentWrapper
  > div:first-child {
    margin: auto 0;
    z-index: 1;

    // H1 and searchfield
    > div { 
      grid-column: 4 / 10;
      
      > h1 {
      font-weight: 300;
      color: ${({theme}) => theme.colors.cloud };
      margin-bottom: 48px;

        strong {
          font-weight: 600;
        }
      }
    }
  }

  // TopFiveMovies spacing
  > section {
      width: 100%;
      transform: translateY(32px);
      z-index: 1;
  }
`

const Header = (props) => {
  // This component passes the searchTerm and search action around between
  // its parent and Searchfield
  
  return (
    <StyledHeader background={props.background}>
      <ContentWrapper>
        <div>
          <h1>
            Find the perfect <strong>movie</strong> for your evening
          </h1>
          <SearchField 
            searchTerm={props.searchTerm}
            updateParentSearchTerm={props.updateParentSearchTerm} 
            performSearchToParent={props.performSearchToParent} 
            />
        </div>

      </ContentWrapper>

      <TopFiveMovies movies={props.movies}></TopFiveMovies>

      <div className='background-gradient'></div>
    </StyledHeader>
  )
}

export default Header
