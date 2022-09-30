import { createGlobalStyle } from "styled-components"; 

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%; /* 10px */
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

    font-family: 'Roboto Slab', serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.2);
  }

`;