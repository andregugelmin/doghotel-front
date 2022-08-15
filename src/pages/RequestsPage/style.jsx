import styled from 'styled-components';

export const Main = styled.div`
	font-family: 'Lato', sans-serif;
	width: 100%;
	min-height: 100vh;
	padding-bottom: 30px;
	background-color: #bd9251;
	padding-top: 100px;
	font-size: 18px;

	h2 {
		font-size: 26px;
		font-weight: 700;
		color: #e9e9e9;
	}

	h3 {
		color: #e9e9e9;
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 5px;
	}

	.tabs {
		background-color: #bd9251;
		padding-top: 10px;
		margin-left: 25px;
	}

	.tab {
		background-color: #dfbd7a;
		margin-right: 10px;
		box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
		border-radius: 10px 10px 0 0;
	}

	.requests {
		background-color: #775d35;
		width: calc(100% - 40px);
		height: auto;
		padding-top: 30px;
		padding-bottom: 50px;
		margin-left: 20px;
		margin-right: 20px;
		padding-left: 50px;
		padding-right: 50px;
		border-radius: 5px;
	}
	.request-box {
		width: calc(100%);
		height: auto;
		background-color: white;
		margin-top: 15px;
		border-radius: 5px;
		padding: 20px;
	}

	.pendent {
		font-size: 19px;
		font-weight: 600;
		color: #252525;
		margin-left: 5px;
	}
	.rejected {
		font-size: 19px;
		color: #e42a2a;
		margin-left: 5px;
	}

	.situation {
		display: flex;
	}

	.buttons {
		margin-top: 14px;
	}
	.accepted {
		font-size: 19px;
		color: #24b124;
		margin-left: 5px;
	}

	.accept-button {
		color: #24b124;
		border-color: #24b124;
		margin-right: 10px;
	}
	.accept-button:focus {
		border-color: #24b124;
	}

	.cancel-button {
		color: #e42a2a;
		border-color: #e42a2a;
	}
	.cancel-button:focus {
		border-color: #e42a2a;
	}
	.divisor {
		width: 100%;
		color: #c9c9c9;
		height: 1px;
		margin-top: 5px;
		margin-bottom: 5px;
	}
`;

export const Dogs = styled.div`
	.dogs-container {
		display: flex;
		flex-wrap: wrap;
		margin-top: 5px;
	}
	.dogs-box {
		color: #252525;
		padding: 5px;
		width: 150px;
		margin-right: 20px;
		border: 1px solid;
		border-color: #252525;
		background-color: #fafafa;
		border-radius: 10px;
	}
`;
