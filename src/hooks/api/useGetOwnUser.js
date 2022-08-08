import useAsync from '../useAsync';
import * as service from '../../services/user';

export default function useGetOwnUser() {
	const { data, loading, act, error } = useAsync(service.getOwnUser, false);

	return {
		loadingGetUser: loading,
		getUser: act,
		getUserError: error,
		ownUser: data,
	};
}
