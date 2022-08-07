import api from './api';

export async function signup(data) {
	const response = await api.post('/signup/user', data);
	return response.data;
}

export async function signin(data) {
	const response = await api.post('/signin', data);
	return response.data;
}
