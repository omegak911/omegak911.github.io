import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    height: 100%;
    margin: 0;
  }
`;

const StandardComponentStyles = `
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  min-height: 500px;
  min-width: 600px;
  width: 100%;
`;

export {
  StandardComponentStyles,
  GlobalStyle,
}
