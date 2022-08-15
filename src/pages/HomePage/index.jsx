import React from 'react';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import { Main } from './style';
import Logo from '../../assets/images/LogoDog_ALTERNATIVA.png';

export default function HomePage() {
	const { token, user } = useAuth();
	return (
		<>
			<Header token={token} user={user}></Header>;
			<Main>
				<img src={Logo} alt="logo" />
				<h1>Encontre um anfitrião de confiança para seu dog aqui!</h1>
			</Main>
		</>
	);
}
