import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  padding: 3.2rem;
  border-radius: 1.6rem;

  > div {

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-weight: 700;
      line-height: 3.2rem;
      text-align: left;
      margin-bottom: 0.8rem;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: left;
    font-size: 1.6rem;
    line-height: 1.9rem;

    height: 5.3rem;
    overflow: hidden;

    margin-block: 2.3rem;
  }

  > footer {
    span {
      margin-right: 0.8rem;
    }
  }
`;