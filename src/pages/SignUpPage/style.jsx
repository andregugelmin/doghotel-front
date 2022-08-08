import styled from 'styled-components';

export const SingUp = styled.div`
	font-weight: 400;
	max-width: 600px;
	margin: auto;
	form {
		margin-top: 100px;
		padding-left: 30px;
		padding-right: 30px;
	}

	.input-div {
		display: flex;
		justify-content: space-between;

		.left {
			margin-right: 20px;
		}
	}

	button {
		width: 100%;
		height: 40px;
		margin-top: 15px;
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		font-size: 16px;
	}

	p {
		margin-top: 20px;
		text-align: center;
	}

	@media (max-width: 450px) {
		form {
			padding-left: 10px;
			padding-right: 10px;
			width: 100vw;
		}
	}

	@media (max-width: 400px) {
		.input-div {
			Input {
				width: 45vw;
			}
		}
	}
`;

export const Input = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	label {
		margin-bottom: 5px;
		font-size: 20px;
	}

	input {
		margin-bottom: 10px;
		height: 30px;
		padding-left: 5px;
	}
`;
