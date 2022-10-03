import styled from 'styled-components';


export const Container = styled.div`


  a {
    margin-top: 4.0rem;
    margin-bottom: 2.4rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

`;

export const Content = styled.section`
  width: 100%;
  max-width: 113.7rem;
  max-height: 78.3rem;
  margin: 4.0rem auto 1.0rem;
`;