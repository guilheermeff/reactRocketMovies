import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.section`
  width: 100%;
  max-width: 112.0rem;

  margin: 4.7rem auto 6.0rem;

  > header {
    width: 100%;

    margin-bottom: 4.0rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 3.2rem;
      line-height: 4.2rem;
      color: #FFFFFF;
      font-weight: 400;
    }

    button {
      width: 20.7rem;
      height: 4.8rem;
      font-size: 1.6rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    overflow-y: auto;

    max-height: 71.6rem;
  }
`;

export const AddButton = styled(Link)`
  width: 100%;
  height: 5.6rem;
  padding: auto;

  font-size: 1.6rem;

  border: 0;
  border-radius: 1.0rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_FRAME};
`;