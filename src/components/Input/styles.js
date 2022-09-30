import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  display: flex;
  align-items: center;

  border-radius: 1.0rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY};

    margin: 1.6rem;
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