import { createTheme } from '@mui/material';
import styled from 'styled-components';

export const Main = styled.header`
	font-family: 'Lato', sans-serif;

	.mobile-menu {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		right: 0;
		top: 0;
		left: 0;
		height: 100px;
		font-size: 30px;
		background-color: white;
		z-index: 4;
	}
	.mobile-menu-icon {
		position: absolute;
		left: 20px;
	}

	.mobile-menu-active {
		position: fixed;
		top: 0;
		left: 0;
		min-height: 100%;
		width: 100%;
		font-size: 30px;
		background-color: white;
		padding-left: 50px;
		z-index: 4;
	}
	.mobile-menu-active p {
		margin-top: 10px;
		font-weight: 500px;
		color: #582e1b;
	}

	.mobile-menu-active-icon {
		position: absolute;
		right: 30px;
		top: 30px;
	}

	.buttons-mobile {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100px;
		width: 80%;
		max-width: 300px;
		margin-top: 50px;
	}
	.desktop-menu {
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		right: 0;
		top: 0;
		left: 0;
		height: 100px;

		background-color: white;
		z-index: 3;
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

		img:hover {
			cursor: pointer;
		}
	}

	.middle {
		display: flex;
		justify-content: space-around;
		width: 500px;
		color: #473929;
	}

	.middle p {
		font-size: 18px;
	}

	.middle p:hover {
		color: #796247;
		cursor: pointer;
	}
	.right {
		color: #473929;
		margin-right: 20px;
	}
	.right p:hover {
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

	.user-name:hover {
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

	@media (max-width: 800px) {
		.desktop-menu {
			display: none;
		}
	}

	@media (min-width: 800px) {
		.mobile-menu {
			display: none;
		}
		.mobile-menu-active {
			display: none;
		}
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
