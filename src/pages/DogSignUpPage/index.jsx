import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import useSignUpDog from '../../hooks/api/useSignUpDog';
import useAuth from '../../hooks/useAuth';
import { Main } from './style';

export default function DogSignUpPage() {
	const { signUpDogData, loadingSignUpDog, signUpDog, signUpDogError } = useSignUpDog();
	const { token, user } = useAuth();
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [breed, setBreed] = useState('');
	const [weight, setWeight] = useState(0);
	const [isNeutered, setIsNeutered] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (signUpDogError) {
			alert('Houve um erro ao efetuar cadastro do dog!');
			console.log(signUpDogError);
		}
	}, [signUpDogError]);

	const handleSignUpDog = async (signupData) => {
		await signUpDog(token, signupData);
	};

	useEffect(() => {
		if (signUpDogData) navigate('/meus-dogs');
	}, [signUpDogData]);

	function submitForm() {
		const signupData = {
			name,
			gender,
			weight: Number(weight),
			breed,
			isNeutered,
		};

		handleSignUpDog(signupData);
	}

	return (
		<>
			<Header token={token} user={user}></Header>
			<Main>
				<div className="header">
					<h1>Cadastrar Dog</h1>
				</div>
				<div className="forms-container">
					<FormControl fullWidth sx={{ m: 1, width: '40ch', maxWidth: '1', p: '10px' }} variant="standard">
						<h2>Nome</h2>
						<TextField className="text-field" onChange={(event) => setName(event.target.value)} />
						<h2>Gênero</h2>
						<RadioGroup row value={gender} onChange={(event) => setGender(event.target.value)}>
							<FormControlLabel value="Male" control={<Radio />} label="Macho" />
							<FormControlLabel value="Female" control={<Radio />} label="Femea" />
						</RadioGroup>
						<h2>Raça</h2>
						<TextField className="text-field" onChange={(event) => setBreed(event.target.value)} />
						<h2>Peso</h2>
						<TextField
							type="number"
							className="text-field"
							onChange={(event) => setWeight(event.target.value)}
							InputProps={{
								startAdornment: <InputAdornment position="start">kg</InputAdornment>,
							}}
						/>
						<div className="checkbox-container">
							<h2>Castrado</h2>
							<Checkbox className="checkbox" onChange={(event) => setIsNeutered(event.target.checked)} />
						</div>
					</FormControl>
					<Button onClick={submitForm}>Cadastrar</Button>
				</div>
			</Main>
		</>
	);
}
