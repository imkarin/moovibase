import React from 'react'
import styled from 'styled-components'

const StyledSearchField = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  gap: 16px;

  > button {
    padding: 0 16px;
    text-transform: uppercase;
    background: #fff;
  }

  > input {
    flex-grow: 1;
    background: #fff;
    padding: 0 16px;
  }
`

const SearchField = (props) => {
  return (
    <StyledSearchField>
      <input 
        placeholder='Search for movies'
        type='text'
        value={props.searchTerm}
        onChange={(e) => { props.updateParentSearchTerm(e.target.value) }}
      />
      <button onClick={props.performSearchToParent}> 
        Search movie
      </button>
    </StyledSearchField>
  )
}

export default SearchField;
