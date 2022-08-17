import styled from 'styled-components';

export const Main = styled.header`
	position: fixed;
	font-family: 'Lato', sans-serif;
	top: 150px;
	width: 600px;
	min-height: 600px;
	height: auto;
	background-color: #ffffff;
	padding: 50px;
	border-radius: 10px;
	font-size: 20px;
	border: 1px solid;
	z-index: 3;

	box-sizing: border-box;
	.date-pickers {
		display: flex;
		margin-top: 25px;
		margin-bottom: 25px;
	}

	h2 {
		font-size: 24px;
		margin-top: 20px;
	}

	.preferences {
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.host-price {
		margin-bottom: 50px;
	}

	.date {
		margin-right: 20px;
	}

	.button-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button-form {
		background: #8d662b;
		margin-top: 30px;
	}

	.icon {
		font-size: 30px;
		color: #8d662b;
	}

	.button-close {
		position: absolute;
		top: 20px;
		right: 30px;
		width: 8px;
	}

	.price {
		font-size: 20px;
	}

	@media (max-height: 850px) {
		top: 50px;
		overflow-y: scroll;
		max-height: 100%;
	}
	@media (max-height: 700px) {
		min-height: 100%;
		top: 0;
		border-radius: 0px;
		border: none;
		overflow-y: scroll;
		max-height: 100%;
	}
	@media (max-width: 700px) {
		width: 100%;
		right: 0;
		left: 0;
		top: 0;
	}
`;
