import styled from "styled-components";

export const Container = styled.div`
  position: relative;
	margin: -124px auto 32px;
	
	width: 186px;
	height: 186px;

	> img {
		border-radius: 50%;

		width: 186px;
		height: 186px;
	}

	> label {
		width: 48px;
		height: 48px;

		background-color: ${({ theme }) => theme.COLORS.PINK};
		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		bottom: 7px;
		right: 7px;

		cursor: pointer;

		input {
			display: none;
		}

		svg {
			width: 20px;
			height: 20px;
			color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
		}
	}
`;