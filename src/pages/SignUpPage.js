import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useCreateUser from '../hooks/api/useCreateUser';

export default function SignUpPage() {
	const { loadingCreatingUser, createUser, creatingUserError } = useCreateUser();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (creatingUserError) {
			alert('Error signing up!');
		}
	}, [creatingUserError]);

	const handleCreateUser = async (user) => {
		await createUser(user);
		navigate('/entrar');
	};

	function submitForm(e) {
		e.preventDefault();

		if (confirmPassword !== password) {
			alert('Confirmação de senha esta diferente!');
			return;
		}

		const signupData = {
			email,
			password,
			confirmPassword,
			name,
			surname,
		};

		handleCreateUser(signupData);
	}

	if (loadingCreatingUser) {
		return <div>Carregando...</div>;
	}

	return (
		<SingUp>
			<form onSubmit={(e) => submitForm(e)}>
				<Input>
					<label>E-mail</label>
					<input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} required />
				</Input>
				<div className="input-div">
					<Input className="left">
						<label>Nome</label>
						<input type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)} required />
					</Input>
					<Input className="right">
						<label>Sobrenome</label>
						<input type="text" placeholder="Seu sobrenome" onChange={(e) => setSurname(e.target.value)} required />
					</Input>
				</div>
				<div className="input-div">
					<Input className="left">
						<label>Senha</label>
						<input
							type="password"
							placeholder="Digite sua senha"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</Input>
					<Input className="right">
						<label>Confirmação</label>
						<input
							type="password"
							placeholder="Confirme sua senha"
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</Input>
				</div>

				<button type="submit">Cadastrar</button>
			</form>

			<Link style={{ textDecoration: 'none' }} to={`/entrar`}>
				<p>Já tem uma conta? Entre agora!</p>
			</Link>
			<Link style={{ textDecoration: 'none' }} to={`/`}>
				<p>Voltar pro inicio</p>
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

	.input-div {
		display: flex;
		justify-content: space-between;

		.left {
			margin-right: 20px;
		}
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

	@media (max-width: 400px) {
		.input-div {
			Input {
				width: 45vw;
			}
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
