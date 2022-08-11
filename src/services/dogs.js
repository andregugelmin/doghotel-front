import api from './api';
import { getConfig } from './utils';

export async function list(token) {
	const config = getConfig(token);
	const response = await api.get('/dogs', config);
	return response.data;
}

export async function signUp(token, data) {
	const config = getConfig(token);
	const response = await api.post('/signup/dog', data, config);
	return response.data;
}
