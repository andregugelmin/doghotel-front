import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cadastro" element={<SignUpPage />} />
					<Route path="/entrar" element={<SignInPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
