import styled from 'styled-components';


export const Container = styled.div`

`;

export const Content = styled.section`
  width: 100%;
  max-width: 113.7rem;
  max-height: 78.3rem;
  margin: 4.0rem auto 1.0rem;
  color: ${({ theme }) => theme.COLORS.WHITE_200};

  a {
    margin-top: 4.0rem;
    margin-bottom: 2.4rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  > header {

    h1 {
      font-size: 3.6rem;
    }

    > div {

      > div {
        width: 1.6rem;
        height: 1.6rem;

        img {
          width: 1.6rem;
          height: 1.6rem;
        }

        label {
          display: none;
        }
      }
    }
  }
`;

export const Tags = styled.section`
  margin-block: 4.0rem;
`;