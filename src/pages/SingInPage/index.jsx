import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Input, SingUp } from './style';
import useLogin from '../../hooks/api/useLogin';
import useAuth from '../../hooks/useAuth';

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
			<Link style={{ textDecoration: 'none' }} to={`/`}>
				<p>Voltar pro inicio</p>
			</Link>
		</SingUp>
	);
}
