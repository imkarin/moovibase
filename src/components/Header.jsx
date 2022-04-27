import React from 'react'
import SearchField from './SearchField'
import ContentWrapper from './styles/ContentWrapper.styled'

const Header = (props) => {
  // This component passes the searchTerm and search action around between
  // its parent and Searchfield
  
  return (
    <header>
      <ContentWrapper>
        <div>
          <h1>
            Find the perfect movie for your evening
          </h1>
          <SearchField 
            searchTerm={props.searchTerm}
            updateParentSearchTerm={props.updateParentSearchTerm} 
            performSearchToParent={props.performSearchToParent} 
            />
        </div>
      </ContentWrapper>
    </header>
  )
}

export default Header
