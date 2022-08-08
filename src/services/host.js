import api from './api';
import { getConfig } from './utils';

export async function signUpHost(token, data) {
	const config = getConfig(token);
	const response = await api.post('/signup/host', data, config);
	return response.data;
}
