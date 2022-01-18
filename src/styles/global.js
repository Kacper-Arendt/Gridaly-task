import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;