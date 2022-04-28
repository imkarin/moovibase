import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: 'Inter', Helvetica, sans-serif;
    font-size: ${({theme}) => theme.typography.body.size};
    font-weight: ${({theme}) => theme.typography.body.weight};
    letter-spacing: ${({theme}) => theme.typography.body.letterSpacing};
    color: ${({theme}) => theme.colors.slate};
    height: 100%;
  }

  .app {
    height: 100vh;
  }
  
  img {
    max-width: 100%;
  }
  
  button, input {
    font-family: 'Inter', Helvetica, sans-serif;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  // Typography based on theme
  h1 {
    font-size: ${({theme}) => theme.typography.h1.size};
    font-weight: ${({theme}) => theme.typography.h1.weight};
    letter-spacing: ${({theme}) => theme.typography.h1.letterSpacing};
    color: ${({theme}) => theme.colors.cloud};
  }
  
  h2 {
    font-size: ${({theme}) => theme.typography.h2.size};
    font-weight: ${({theme}) => theme.typography.h2.weight};
    letter-spacing: ${({theme}) => theme.typography.h2.letterSpacing};
    color: ${({theme}) => theme.colors.nightsky};
  }

  h3 {
    font-size: ${({theme}) => theme.typography.h3.size};
    font-weight: ${({theme}) => theme.typography.h3.weight};
    letter-spacing: ${({theme}) => theme.typography.h3.letterSpacing};
    color: ${({theme}) => theme.colors.nightsky};
  }

  .body-smaller {
    font-size: ${({theme}) => theme.typography.bodySmaller.size};
    font-weight: ${({theme}) => theme.typography.bodySmaller.weight};
    letter-spacing: ${({theme}) => theme.typography.bodySmaller.letterSpacing};
    color: ${({theme}) => theme.colors.cloudDark};
  }

  button {
    font-size: ${({theme}) => theme.typography.button.size};
    font-weight: ${({theme}) => theme.typography.button.weight};
    letter-spacing: ${({theme}) => theme.typography.button.letterSpacing};
    color: ${({theme}) => theme.colors.slate};
  }

  .caption {
    font-size: ${({theme}) => theme.typography.caption.size};
    font-weight: ${({theme}) => theme.typography.caption.weight};
    letter-spacing: ${({theme}) => theme.typography.caption.letterSpacing};
    color: ${({theme}) => theme.colors.slate};
  }

  .overline {
    font-size: ${({theme}) => theme.typography.overline.size};
    font-weight: ${({theme}) => theme.typography.overline.weight};
    letter-spacing: ${({theme}) => theme.typography.overline.letterSpacing};
    color: ${({theme}) => theme.colors.slate};
  }

`

export default GlobalStyles
