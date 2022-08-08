import React from 'react';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';

export default function HomePage() {
	const { token, user } = useAuth();
	return <Header token={token} user={user}></Header>;
}
