import { createTheme } from '@mui/material';
import styled from 'styled-components';

export const Main = styled.header`
	font-family: 'Lato', sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: fixed;
	right: 0;
	top: 0;
	left: 0;
	height: 100px;
	border: 1px solid #553c20;
	background-color: white;
	z-index: 3;

	.middle {
		display: flex;
		justify-content: space-around;
		width: 300px;
		color: #473929;
	}

	.middle p:hover {
		color: #796247;
		cursor: pointer;
	}

	.profile Button {
		margin-right: 10px;
	}

	.profile-active {
		display: flex;
		align-items: center;
	}

	.profile-active p {
		margin-left: 15px;
		font-weight: 500;
		color: black;
	}

	.profile-active:hover {
		text-decoration: underline;
		cursor: pointer;
		color: #252525;
	}

	.icon {
		width: 100%;
		font-size: 20px;
		margin-top: 8px;
		margin-left: 10px;
	}
`;

export const HeaderTheme = createTheme({
	palette: {
		primary: {
			light: '#ad8251',
			main: '#70522f',
			dark: '#553c20',
		},
	},
});
