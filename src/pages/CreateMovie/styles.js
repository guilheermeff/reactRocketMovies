import styled from 'styled-components';

export const Container = styled.div`

  a {
    margin-top: 4.0rem;
    margin-bottom: 2.4rem;
    margin-left: 12.3rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: 113.7rem;
  margin: 0 auto;

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

      h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.0rem;
        font-weight: 400;
        line-height: 2.6rem;

        text-align: left;
      }
    }
  }
`;