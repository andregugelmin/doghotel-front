import styled from 'styled-components';

export const Main = styled.div`
	background-color: #bd9251;
	width: 100%;
	min-height: 100vh;
	padding-top: 150px;

	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
`;

export const SingUp = styled.div`
	font-weight: 400;
	max-width: 600px;
	margin: auto;
	font-family: 'Lato', sans-serif;
	border: 1px solid;
	border-radius: 10px;
	padding: 50px;
	background-color: #ffffff;
	form {
		margin-top: 0;
		padding-left: 30px;
		padding-right: 30px;
	}

	button {
		width: 100%;
		height: 40px;
		margin-top: 15px;
		font-family: 'Open Sans', sans-serif;
		font-weight: 500;
		font-size: 16px;
		color: #38352f;
		border-color: #584e3d;
	}

	p {
		font-size: 18px;
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
