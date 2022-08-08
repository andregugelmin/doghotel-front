import { createContext, useEffect, useState } from 'react';
import useGetOwnUser from '../hooks/api/useGetOwnUser';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const { storagedValue, setStoragedValue, removeValue } = useLocalStorage('doghotel-token', '');
	const [token, setToken] = useState(storagedValue);
	const [user, setUser] = useState({});
	const { getUser, getUserError, ownUser } = useGetOwnUser();

	useEffect(() => {
		if (token) getOwnUser(token);
	}, [token]);

	useEffect(() => {
		if (getUserError) {
			alert(getUserError);
		}
	}, [getUserError]);

	useEffect(() => {
		if (ownUser) {
			setUser(ownUser);
		}
	}, [ownUser]);

	const getOwnUser = async (token) => {
		await getUser(token);
	};

	function signIn(token) {
		setToken(token);
		setStoragedValue(token);
	}

	function signOut() {
		setToken(null);
		removeValue();
	}

	return <AuthContext.Provider value={{ token, signIn, signOut, user }}>{children}</AuthContext.Provider>;
}
