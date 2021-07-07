import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
    --primary: #FFF;
    --secondary: #EFEEF1;
    --third: #694B3C;
    --fourth: #7A3B6C;
    --fifth: #E8667D;
    --font-family-primary: 'Cinzel', serif;
    --font-family-second: 'Taviraj', serif;
    --font-family-third: 'Itim', cursive;
    --err: tomato;
  }
  body {
    background-color: var(--secondary);
    color: var(--color-first);
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: var(----font-family-second);
  }
  button {
    cursor: pointer;
    border: 0;
  }

	a {
		text-decoration: none;
		font-family: var(--font-family-primary);
	}


`;

export default GlobalStyle;
