import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-weight: 700;
    line-height: 3.2rem;
    text-align: left;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: left;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;