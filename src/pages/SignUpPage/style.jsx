import styled from 'styled-components';

export const Main = styled.div`
	background-color: #bd9251;
	width: 100%;
	min-height: 100vh;
	padding-top: 150px;
	padding-bottom: 50px;

	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	@media (max-height: 800px) {
		padding-top: 50px;
	}
	@media (max-height: 600px) {
		padding-top: 0;
	}

	@media (max-width: 560px) {
		padding-top: 0;
	}
`;

export const SingUp = styled.div`
	font-weight: 400;
	width: 600px;
	max-width: 100%;
	margin: auto;
	font-family: 'Lato', sans-serif;
	border: 1px solid;
	border-radius: 10px;
	padding: 50px;
	background-color: #ffffff;
	form {
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
		color: #38352f;
		border-color: #584e3d;
	}

	p {
		margin-top: 20px;
		text-align: center;
	}

	@media (max-width: 560px) {
		form {
			padding-left: 10px;
			padding-right: 10px;
			width: 100%;
		}

		.input-div {
			flex-direction: column;
			.left {
				margin-right: 0;
			}
		}

		button {
			height: 30px;
			margin-top: 12px;
			font-size: 14px;
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

	@media (max-width: 560px) {
		label {
			font-size: 16px;
		}

		input {
			margin-bottom: 8px;
			height: 24px;
		}
	}
`;
