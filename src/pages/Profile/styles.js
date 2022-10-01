import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas: 
    "header"
    "form"
  ;

  > header {
    grid-area: 'header';

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

    position: relative;

    > a {
      position: absolute;
      padding-block: 5.97rem;
      padding-left: 14.4rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`;

export const Form = styled.form`

`;