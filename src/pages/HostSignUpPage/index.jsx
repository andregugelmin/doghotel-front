import { Button, CssBaseline, FormControl, Input, Slider, TextField, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import { ButtonTheme, SignUpHost, Main } from './style';
import imagecouple from '../../assets/images/couple-and-dog-image.jpg';
import { Box } from '@mui/system';
import useSignUpHost from '../../hooks/api/useSignUpHost';
import { useNavigate } from 'react-router-dom';

export default function HostSingUpPage() {
	const { loadingSignUpHost, signUpHost, signUpHostError } = useSignUpHost();
	const { token, user } = useAuth();
	const [signing, setSigning] = useState(false);
	const [price, setPrice] = useState(5000);
	const [weight, SetWeigh] = useState([0, 50]);
	const [city, setCity] = useState(user.city);
	const [address, setAdress] = useState(user.address);

	const navigate = useNavigate();

	const handlePriceSliderChange = (event, newValue) => {
		setPrice(newValue);
	};
	const handleInputPriceChange = (event) => {
		setPrice(event.target.value === '' ? '' : Number(event.target.value * 100));
	};

	const handleWeightChange = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (newValue[1] - newValue[0] < 5) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], 100 - 5);
				SetWeigh([clamped, clamped + 5]);
			} else {
				const clamped = Math.max(newValue[1], 5);
				SetWeigh([clamped - 5, clamped]);
			}
		} else {
			SetWeigh(newValue);
		}
	};

	const handlePriceBlur = () => {
		if (price < 2000) {
			setPrice(2000);
		} else if (price > 25000) {
			setPrice(25000);
		}
	};

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};

	const handleAddresChange = (event) => {
		setAdress(event.target.value);
	};

	function pricetext(value) {
		return `$${value / 100},${value - Math.floor(value / 100) * 100}`;
	}

	useEffect(() => {
		if (signUpHostError) {
			alert('Houve um erro ao efetuar cadastro para anfitrião!');
		}
	}, [signUpHostError]);

	const handleSignUpHost = async (signupData) => {
		await signUpHost(token, signupData);
		navigate('/');
	};

	function submitForm(e) {
		e.preventDefault();

		const signupData = {
			price,
			minWeight: weight[0],
			maxWeight: weight[1],
			city,
			address,
		};

		handleSignUpHost(signupData);
	}

	return !signing ? (
		<>
			<Header token={token} user={user}></Header>

			<Main>
				<div className="image-message">
					<img src={imagecouple} alt="couple-and-dog" />
					<div className="subscription-message">
						<ThemeProvider theme={ButtonTheme}>
							<CssBaseline enableColorScheme />
							<h1>Se torne um anfitrião da Dog Hotel </h1>
							<h2>Junte-se ao nosso time de anfitriões e trabalhe com o que você ama, cuidando de doguinhos!</h2>
							<Button variant="contained" color="primary" onClick={() => setSigning(true)}>
								Quero me torna um anfitrião
							</Button>
						</ThemeProvider>
					</div>
				</div>
			</Main>
		</>
	) : (
		<SignUpHost>
			<div className="forms">
				<ThemeProvider theme={ButtonTheme}>
					<CssBaseline enableColorScheme />
					<Box sx={{ width: 250 }}>
						<div className="input-title">
							<p>Preço da hospedagem</p>
							<Input
								value={price / 100}
								size="small"
								onChange={handleInputPriceChange}
								onBlur={handlePriceBlur}
								inputProps={{
									step: 1,
									min: 0,
									max: 250,
									type: 'number',
									'aria-labelledby': 'input-slider',
								}}
							/>
						</div>

						<Slider
							aria-labelledby="input-slider"
							value={typeof price === 'number' ? price : 20}
							getAriaValueText={pricetext}
							step={100}
							marks={[
								{
									value: 2000,
									label: '$20',
								},
								{
									value: 25000,
									label: '$250',
								},
							]}
							min={2000}
							max={25000}
							onChange={handlePriceSliderChange}
						/>

						<div className="title-weight">
							<p>Peso do cachorro que deseja hospedar (minimo e máximo)</p>
						</div>

						<Slider
							getAriaLabel={() => 'Temperature range'}
							value={weight}
							onChange={handleWeightChange}
							step={5}
							marks={[
								{
									value: 0,
									label: '0kg',
								},
								{
									value: 50,
									label: '50kg',
								},
							]}
							min={0}
							max={50}
							valueLabelDisplay="on"
						/>
					</Box>

					<FormControl fullWidth sx={{ m: 1, width: '40ch' }} variant="standard">
						<TextField
							className="text-field"
							label="Sua cidade"
							variant="filled"
							onChange={handleCityChange}
							defaultValue={city}
						/>

						<TextField
							className="text-field"
							label="Seu endereço"
							variant="filled"
							onChange={handleAddresChange}
							defaultValue={address}
						/>
					</FormControl>

					<Button variant="contained" color="primary" onClick={submitForm}>
						Finalizar cadastro
					</Button>
				</ThemeProvider>
			</div>
		</SignUpHost>
	);
}
