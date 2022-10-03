import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  overflow: hidden;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  footer {
    display: flex;
    gap: 4.0rem;

    > button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.DARK_100};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  max-height: 78.3rem;
  max-width: 113.7rem;
  margin: 4.0rem auto 10.0rem;

  grid-area: "content";
  overflow-y: auto;

  a {
    margin-top: 4.0rem;
    margin-bottom: 2.4rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  
  > form {

    h1 {
      font-size: 3.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      margin-bottom: 4.0rem;
    }

    > div {
      display: flex;
      gap: 4.0rem;

      margin-bottom: 3.2rem;
      
      input {
        padding-left: 2.0rem;
      }
    }

    > section {
      width: 100%;
      margin-bottom: 4.0rem;

      h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.0rem;
        font-weight: 400;
        line-height: 2.6rem;

        text-align: left;
        margin-bottom: 2.4rem;
      }

      > div {
        width: 100%;
        padding: 1.6rem;
        border-radius: 0.8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_100};

        display: flex;
        flex-direction: row;
        gap: 2.4rem;
      }
    }
  }
`;