import styled from 'styled-components';


export const Container = styled.div`
  font-family: 'Roboto Slab', serif;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 113.7rem;
  max-height: 78.3rem;
  margin: 4.0rem auto 1.0rem;
  color: ${({ theme }) => theme.COLORS.WHITE_200};

  overflow-y: scroll;

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
      margin-bottom: 2.4rem;
      font-weight: 400;
    }

    > div {

      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      margin-right: 0.8rem;

      > figure {
        width: 1.6rem;
        height: 1.6rem;

        display: inline;

        img {
          width: 1.6rem;
          height: 1.6rem;
        }

        label {
          display: none;
        }
      }

      > svg {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }

      > span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
      }
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;

    font-family: 'Roboto Slab', sans-serif;
    text-align: justify;
    line-height: 2.1rem;
  }
`;

export const Tags = styled.section`
  margin-block: 4.0rem;
  
  span {
    margin-right: 0.8rem;
  }
`;