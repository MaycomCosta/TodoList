import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: #0f2637;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle