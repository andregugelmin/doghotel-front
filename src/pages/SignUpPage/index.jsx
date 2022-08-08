import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCreateUser from '../../hooks/api/useCreateUser';

import { Input, SingUp } from './style';

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
