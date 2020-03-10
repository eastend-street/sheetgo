import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"

const GlobalStyle = createGlobalStyle`
  ${reset};
 
  body {
    font-family: sans-serif, "Roboto";
  }
`

export default GlobalStyle
