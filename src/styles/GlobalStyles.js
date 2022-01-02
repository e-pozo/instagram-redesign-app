import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    box-shadow: 0px 0 5px rgba(0,0,0,.2);
    ${"" /* width: ; */}
  }
`;
