import React from 'react'

import Logo from '../images/logo.png'
import ContentWrapper from './styles/ContentWrapper.styled'

const Navigation = () => {
  return (
    <nav>
      <ContentWrapper>
        <img src={Logo} alt="MooviBase logo" />
      </ContentWrapper>
    </nav>
  )
}

export default Navigation
