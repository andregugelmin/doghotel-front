import React, { useEffect, useState } from 'react';
import { Button, CssBaseline, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import { FormTheme, Main } from './style';
import Logo from '../../assets/images/LogoDog-_BRANCA.png';
import useGetHost from '../../hooks/api/useGetHost';

export default function SearchHostPage() {
	const { token, user } = useAuth();
	const { loadingGetHost, getHost, getHostError, host } = useGetHost();
	const [searchOption, setSearchOption] = useState('name');
	const [searchHost, setSearchHost] = useState('');

	useEffect(() => {
		if (getHostError) {
			alert('Houve um erro ao pesquisar hosts!');
			console.log(getHostError);
		}
	}, [getHostError]);

	function submitSearch() {
		const searchData = {
			name: searchHost,
		};

		console.log(searchData, searchOption);
		if (searchHost) getHost(searchData, searchOption);
	}

	if (loadingGetHost) {
		return (
			<>
				<Header token={token} user={user}></Header>
				<Main></Main>
			</>
		);
	}

	return !host ? (
		<>
			<Header token={token} user={user}></Header>
			<ThemeProvider theme={FormTheme}>
				<CssBaseline enableColorScheme />
				<Main>
					<img src={Logo} alt="logo" />
					<FormControl className="pre-form" fullWidth sx={{ m: 1, width: '60ch' }} variant="standard">
						<TextField
							className="input"
							variant="outlined"
							onChange={(event) => setSearchHost(event.target.value)}
							focused
						/>
						<RadioGroup row onChange={(event) => setSearchOption(event.target.value)}>
							<FormControlLabel value="name" control={<Radio />} label="Nome" />
							<FormControlLabel value="city" control={<Radio />} label="Cidade" />
							<Button color="secondary" onClick={submitSearch} size="large">
								Pesquisar
							</Button>
						</RadioGroup>
					</FormControl>
				</Main>
			</ThemeProvider>
		</>
	) : (
		<>
			<Header token={token} user={user}></Header>
			<ThemeProvider theme={FormTheme}>
				<CssBaseline enableColorScheme />
				<Main>
					<FormControl className="form" fullWidth sx={{ m: 1, width: '60ch' }} variant="standard">
						<TextField
							className="input"
							color="primary"
							variant="outlined"
							onChange={(event) => setSearchHost(event.target.value)}
							focused
						/>
						<RadioGroup row onChange={(event) => setSearchOption(event.target.value)}>
							<FormControlLabel color="primary" value="name" control={<Radio />} label="Nome" />
							<FormControlLabel color="primary" value="city" control={<Radio />} label="Cidade" />
							<Button onClick={submitSearch} size="large">
								Pesquisar
							</Button>
						</RadioGroup>
					</FormControl>
					<div className="hosts-container">
						<h1>Hosts encontrados:</h1>
						{host.map((elem, i) => {
							return (
								<div key={i} className="host-box">
									<div className="host-info">
										<h2>
											{elem.user.name} {elem.user.surname}
										</h2>
										<p>
											{elem.user.city} - {elem.user.address}
										</p>
										<p>
											{elem.minWeight}kg - {elem.maxWeight}kg
										</p>
									</div>

									<div className="price">
										<h2>R${elem.price / 100}</h2>
										<p>p/ noite</p>
									</div>
								</div>
							);
						})}
					</div>
				</Main>
			</ThemeProvider>
		</>
	);
}
