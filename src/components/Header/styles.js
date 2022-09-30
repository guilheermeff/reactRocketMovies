import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.5px solid ${({ theme }) => theme.COLORS.GRAY};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-left: 12.3rem;
  }

  > input {
    width: 100%;
    max-width: 63.0rem;
    padding: 1.9rem 2.4rem;

    margin-left: 6.4rem;

    border: 0;
    border-radius: 1.0rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }

    &:focus {
      outline: 0;
    }
  }
`;

export const Profile = styled.div`

  display: flex;
  align-items: center;
  gap: 1.0rem;

  margin-right: 12.3rem;

  > img {
    width: 6.4rem;
  }

  > div {

    text-align: right;
    width: 19.8rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-size: 1.4rem;
      line-height: 1.8rem;
      display: block;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY};
`;