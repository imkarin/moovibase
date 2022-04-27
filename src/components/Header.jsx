import React from 'react'
import styled from 'styled-components'

import SearchField from './SearchField'
import ContentWrapper from './styles/ContentWrapper.styled'

const StyledHeader = styled.header`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

> .background {
  position: absolute;
  top: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
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
      <div className='background'></div>
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
    </StyledHeader>
  )
}

export default Header
