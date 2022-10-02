import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  margin-bottom: 8px;
  border-radius: 10px;

  textarea {
    color: ${({ theme }) => theme.COLORS.GRAY};
    height: 27.4rem;
    padding: 2.0rem;
    font-size: 1.6rem;
    resize: none;
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;