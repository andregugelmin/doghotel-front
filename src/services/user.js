import api from './api';
import { getConfig } from './utils';

export async function getOwnUser(token) {
	const config = getConfig(token);
	const response = await api.get('/ownuser', config);
	return response.data;
}
