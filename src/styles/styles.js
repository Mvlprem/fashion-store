import Druk from '../fonts/Druk.otf'
import * as styled from 'styled-components'

export const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: 'Druk';
    src: url(${Druk});
  }

  :root {
    --bs-body-font-family: 'Druk', sans-serif;
  }

  p,
  small {
    font-family: sans-serif;
  }

  header {
    background-color: white;
  }

  footer {
    background-color: black;
  }
`
