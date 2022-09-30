import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  padding: auto;

  font-size: 1.6rem;

  border: 0;
  border-radius: 1.0rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_FRAME};

  margin-top: 1.6rem;
`;