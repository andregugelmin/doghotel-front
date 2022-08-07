import React, { useContext } from 'react';
import useAuth from '../hooks/useAuth';

function HomePage() {
	const { token } = useAuth();
	return <div>{token}</div>;
}

export default HomePage;
