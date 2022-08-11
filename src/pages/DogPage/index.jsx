import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import useDogs from '../../hooks/api/useDogs';
import useAuth from '../../hooks/useAuth';
import { Main } from './style';

export default function DogPage() {
	const { token, user } = useAuth();
	const { dogs, loadingDogs, listDogs } = useDogs(token);

	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			listDogs(token);
		}
	}, [token]);

	if (loadingDogs) {
		return <div>Loading...</div>;
	}
	return !dogs ? (
		<>
			<Header token={token} user={user}></Header>
			<Main>
				<div className="header">
					<h1>Meus Dogs</h1>
				</div>
				<div className="dogs-container">
					<h2>Nenhum dog cadastrado!</h2>
					<p>Cadastre um dog em seu perfil</p>
					<Button onClick={() => navigate('/cadastre-seu-dog')}>Cadastrar dog</Button>
				</div>
			</Main>
			<Footer></Footer>
		</>
	) : (
		<>
			<Header token={token} user={user}></Header>
			<Main>
				<div className="header">
					<h1>Meus Dogs</h1>
				</div>
				<div className="dogs-container">
					{dogs.map((elem, i) => {
						return (
							<div key={i} className="dog-box">
								<h3>{elem.name}</h3>
								<p>
									{elem.breed}, {elem.weight}kg
								</p>
								{elem.gender === 'Female' ? <p>Fêmea</p> : <p>Macho</p>}
								{elem.isNeutered ? <p>Castrado</p> : <p>Não castrado</p>}
							</div>
						);
					})}

					<Button onClick={() => navigate('/cadastre-seu-dog')}>Cadastrar dog</Button>
				</div>
			</Main>
			<Footer></Footer>
		</>
	);
}
