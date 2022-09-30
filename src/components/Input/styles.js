import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  
  background-color: ${({ theme }) = theme.COLORS.BACKGROUND_INPUT};

  display: flex;
  align-items: center;

  color: ${({ theme }) = theme.COLORS.GRAY};
  
  > svg {
    font-size: 2.0rem;
    padding: 1.8rem;
  }

  > input {
    font-size: 1.6rem;
  }
`;