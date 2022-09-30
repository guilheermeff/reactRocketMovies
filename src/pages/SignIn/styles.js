import styled from "styled-components";
import backgroundImg from '../../assets/imagem-sala-de-cinema.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
    
  display: grid;
  grid-template-columns: 62.5rem auto;
  grid-template-areas: 
    "login"
    "background"
  ;

`;

export const Form = styled.form`
  width: 100%;
  max-width: 34.0rem;
  margin: auto;

  > div:nth-child(1) {
    text-align: left;

    h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 4.8rem;
    }
    
    p {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 1.4rem;
    }
  }

  > p {
    font-size: 2.4rem;
    color: #FFFFFF;

    margin-block: 4.8rem;
  }
`;

export const Return = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  margin-top: 4.5rem;

  > svg {
    font-size: 3.2rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  grid-area: "background";

  height: 100vh;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
`;