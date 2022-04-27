import React from 'react'
import SearchField from './SearchField'

const Header = (props) => {
  return (
    <header>
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
    </header>
  )
}

export default Header
