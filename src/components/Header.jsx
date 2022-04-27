import React from 'react'
import styled from 'styled-components'

import SearchField from './SearchField'
import ContentWrapper from './styles/ContentWrapper.styled'

const StyledHeader = styled.header`
position: relative;
width: 100%;
height: calc(100% - 64px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
overflow: hidden;
background-image: url(${props => props.background});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;

> .background-gradient {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0) 60%);
}

> div:first-child {
  z-index: 1;
  
  > div { // h1 and searchfield
    grid-column: 4 / 10;
  }
}

h1 {
  font-weight: 300;
  color: ${({theme}) => theme.colors.cloud };
  margin-bottom: 48px;

  strong {
    font-weight: 600;
  }
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
      <div className='background-gradient'></div>
    </StyledHeader>
  )
}

export default Header
