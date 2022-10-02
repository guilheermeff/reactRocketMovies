import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  margin-bottom: 8px;
  border-radius: 10px;

  textarea {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY};
    height: 27.4rem;
    padding: 2.0rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    resize: none;
    background-color: transparent;
    border: 0;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-weight: 400;
    }
  }
`;