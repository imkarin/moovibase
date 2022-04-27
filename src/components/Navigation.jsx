import React from 'react'
import styled from 'styled-components'

import Logo from '../images/logo.png'
import ContentWrapper from './styles/ContentWrapper.styled'

const StyledNav = styled.nav`
  position: absolute;
  padding-top: 32px;
  padding-bottom: 32px;
  z-index: 2;

  img {
    grid-column: 1 / 6;
  }
`

const Navigation = () => {
  return (
    <StyledNav>
      <ContentWrapper>
        <img src={Logo} alt="MooviBase logo" />
      </ContentWrapper>
    </StyledNav>
  )
}

export default Navigation
