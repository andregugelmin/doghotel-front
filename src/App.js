import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SingInPage';
import HostSingUpPage from './pages/HostSignUpPage';

export default function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cadastro" element={<SignUpPage />} />
					<Route path="/entrar" element={<SignInPage />} />
					<Route path="/seja-um-anfitriao" element={<HostSingUpPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
