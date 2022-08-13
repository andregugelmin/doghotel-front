import api from './api';
import { getConfig } from './utils';

export async function signUpHost(token, data) {
	const config = getConfig(token);
	const response = await api.post('/signup/host', data, config);
	return response.data;
}

export async function searchHost(data, type) {
	const response = await api.post(`/hosts/${type}`, data);
	return response.data;
}
