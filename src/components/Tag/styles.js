import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_FRAME};

  color: ${({ theme }) => theme.COLORS.WHITE_200};
  font-size: 1.2rem;

  padding: 0.5rem 1.6rem;

  border-radius: 1.0rem;

  font-family: 'Roboto', sans-serif;
`;