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
  
  > div {
    margin-bottom: 4.8rem;
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

  > span {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 2.4rem;
  }
`;

export const Background = styled.div`
  grid-area: "background";

  height: 100vh;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
`;