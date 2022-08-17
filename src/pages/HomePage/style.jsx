import styled from 'styled-components';

export const Main = styled.div`
	font-family: 'Lato', sans-serif;
	width: 100%;
	min-height: 100vh;
	background-color: #bd9251;
	padding-top: 140px;
	padding-bottom: 100px;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		color: #9e4424;
		font-size: 40px;
		width: 500px;
		max-width: 100%;
		text-align: center;
		font-weight: 700;
	}
	img {
		max-width: 100%;
	}

	@media (max-height: 800px) {
		padding-top: 80px;
	}

	@media (max-width: 800px) {
		h1 {
			font-size: 30px;
		}
	}

	@media (max-width: 400px) {
		h1 {
			font-size: 24px;
		}
	}
`;
