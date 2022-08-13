import styled from 'styled-components';
import { createTheme } from '@mui/material';

export const Main = styled.header`
	font-family: 'Lato', sans-serif;
	width: 100%;
	height: 100vh;
	background-color: #bd9251;
	padding-top: 100px;

	display: flex;
	flex-direction: column;
	align-items: center;

	.pre-form {
		color: white;
	}

	.form {
		margin-top: 40px;
		padding: 15px;
		color: white;
	}

	.input {
		background-color: white;
		border-radius: 5px;
	}

	.hosts-container {
		margin-top: 100px;
		width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		font-size: 26px;
		font-weight: 700;
	}

	.host-box {
		width: 100%;
		padding: 20px;
		margin-top: 15px;
		background-color: white;
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
		border-radius: 6px;
		display: flex;
		justify-content: space-between;
	}

	.host-box h2 {
		font-size: 18px;
		font-weight: 700;
	}
	p {
		font-size: 16px;
		font-weight: 500;
	}

	.price {
		color: #553c20;
		font-weight: 700;
	}
`;

export const FormTheme = createTheme({
	palette: {
		primary: {
			light: '#ad8251',
			main: '#3d3a35',
			dark: '#553c20',
		},

		secondary: {
			light: '#ad8251',
			main: '#2c2727',
			dark: '#553c20',
		},
	},
});
