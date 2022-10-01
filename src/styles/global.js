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
    background-color: ${({ theme }) => theme.COLORS.DARK};

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

  ::-webkit-scrollbar {
    width: .8rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    width: 1.6rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme }) => theme.COLORS.PINK};
    border-radius: .8rem;
    border: none;
  }

`;