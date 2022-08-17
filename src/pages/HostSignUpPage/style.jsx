import { createTheme } from '@mui/material';
import styled from 'styled-components';

export const Main = styled.header`
	width: 100%;
	min-height: 100vh;
	background-color: #bd9251;
	padding-top: 100px;
	padding-bottom: 100px;

	.image-message {
		max-height: calc(100vh - 100px);
		overflow: hidden;
	}

	.subscription-message {
		position: absolute;
		top: 250px;
		right: 50px;
		padding: 15px;
		background-color: #ebe0cfbe;
		width: 60%;
		max-width: 500px;
		min-width: 300px;
	}

	img {
		width: 100%;
		min-height: 500px;
		min-width: 630px;
	}

	h1 {
		font-weight: 700;
		font-size: 28px;
		margin-bottom: 10px;
		color: #382918;
	}

	h2 {
		font-weight: 500;
		font-size: 18px;
		margin-bottom: 20px;
		color: #382918;
	}

	@media (max-width: 1350px) {
		.image-message {
			max-height: 650px;
		}
	}

	@media (max-width: 740px) {
		img {
			width: 740px;
		}

		.image-message {
			max-height: 500px;
		}
	}

	@media (max-width: 450px) {
		.subscription-message {
			right: 0px;
		}
	}
`;

export const ButtonTheme = createTheme({
	palette: {
		primary: {
			light: '#c7a57f',
			main: '#775227',
			dark: '#553c20',
		},
	},
});

export const SignUpHost = styled.header`
	width: 100%;
	min-height: 100vh;
	padding-bottom: 50px;
	background-color: #bd9251;
	display: flex;
	justify-content: center;
	.forms {
		width: 500px;
		max-width: 100%;
		max-height: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding-top: 50px;
		padding-bottom: 50px;
		margin-top: 120px;
		background-color: white;
	}

	.input-title {
		font-size: 18px;
		font-weight: 400;
		display: flex;
		justify-content: space-between;
	}

	.title-weight {
		font-size: 18px;
		font-weight: 400;
		margin-top: 30px;
		margin-bottom: 35px;
	}

	.text-field {
		margin-bottom: 20px;
	}
`;
