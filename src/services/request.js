import api from './api';
import { getConfig } from './utils';

export async function sendRequest(token, data) {
	const config = getConfig(token);
	const response = await api.post(`/request`, data, config);
	return response.data;
}

export async function getRequests(token, type) {
	const config = getConfig(token);
	const response = await api.get(`/requests/${type}`, config);
	return response.data;
}
