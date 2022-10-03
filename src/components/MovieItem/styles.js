import styled from 'styled-components';

export const Container = styled.div`
  height: 5.6rem;
  padding: 1.6rem;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.DARK};
  border-radius: 1.0rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  border: ${({ isNew }) => isNew ? '1px dashed #948F99' : 'none'};

  input {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.9rem;

    background-color: transparent;
    border: 0;
    outline: none;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > button {

    border: 0;
    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
    }
  }
`;