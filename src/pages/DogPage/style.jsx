import styled from 'styled-components';

export const Main = styled.header`
	font-family: 'Lato', sans-serif;
	width: 100%;
	height: auto;
	min-height: 100vh;
	background-color: #bd9251;
	padding-top: 100px;

	.header {
		width: 600px;
		max-width: 100%;
		margin: 100px auto 0 auto;
	}

	h1 {
		font-size: 26px;
		font-weight: 700;
		color: #272323;
	}

	h2 {
		font-size: 22px;
		font-weight: 500;
		margin-bottom: 15px;
		margin-top: 15px;
	}

	h3 {
		font-size: 22px;
		font-weight: 500;
	}

	p {
		font-size: 20px;
		font-weight: 300;
	}

	Button {
		margin-bottom: 25px;
		margin-top: 25px;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);
		background: #a07b43;
		color: white;
	}

	Button:hover {
		margin-bottom: 15px;
		margin-top: 15px;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
		background: #b68e52;
		color: white;
	}

	.dogs-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
		width: 600px;
		max-width: 100%;
		height: auto;
		min-height: 400px;
		background: white;
		margin: 25px auto;
		margin-bottom: 0px;
	}

	.dog-box {
		width: 450px;
		max-width: 100%;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
		padding: 15px;
		margin-top: 25px;
		background: #e4dedeb1;
	}
`;
