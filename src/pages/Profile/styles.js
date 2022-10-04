import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 14.4rem auto;

  > header {

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

    position: relative;

    > a {
      position: absolute;
      padding-block: 5.97rem;
      padding-left: 14.4rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`;

export const Form = styled.form`
  width: 34.0rem;

  margin: 0 auto;

  > figure {
    position: relative;
	  margin: -86px auto 32px;

    width: 186px;
	  height: 186px;

    img {
      width: 186px;
		  height: 186px;
    }
  }

  div:nth-child(3) {
    margin-bottom: 1.6rem;
  }

  button {
    margin-top: 1.6rem;
  }
`;