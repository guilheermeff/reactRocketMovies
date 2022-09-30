import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  background-color: #262529;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > input {
    height: 5.6rem;
    width: 100%;
    
    background: transparent;
    border: 0;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;