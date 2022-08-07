import { Alert } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useLogin from '../hooks/api/useLogin';
import useAuth from '../hooks/useAuth';

export default function SignInPage() {
	const { signIn } = useAuth();
	const { loadingLogin, login, loginError, loginData } = useLogin();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState(<></>);

	const navigate = useNavigate();

	useEffect(() => {
		if (loginError) {
			setErrorMsg(<Alert severity="error"> {loginError.response.data}</Alert>);
		}
	}, [loginError]);

	useEffect(() => {
		if (loginData) {
			signIn(loginData.token);
			navigate('/');
		}
	}, [loginData]);

	const handleLogin = async (loginData) => {
		await login(loginData);
	};

	function submitForm(e) {
		e.preventDefault();

		const loginData = {
			email,
			password,
		};

		handleLogin(loginData);
	}

	if (loadingLogin) {
		return <div>Carregando...</div>;
	}

	return (
		<SingUp>
			<form onSubmit={(e) => submitForm(e)}>
				<Input>
					<label>E-mail</label>
					<input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} required />
				</Input>
				<Input>
					<label>Senha</label>
					<input
						type="password"
						placeholder="Digite sua senha"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Input>

				<button type="submit">Entrar</button>
			</form>
			{errorMsg}
			<Link style={{ textDecoration: 'none' }} to={`/cadastro`}>
				<p>Faça seu cadastro</p>
			</Link>
		</SingUp>
	);
}

const SingUp = styled.div`
	font-weight: 400;
	max-width: 600px;
	margin: auto;
	form {
		margin-top: 100px;
		padding-left: 30px;
		padding-right: 30px;
	}

	button {
		width: 100%;
		height: 40px;
		margin-top: 15px;
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		font-size: 16px;
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

const Input = styled.div`
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
