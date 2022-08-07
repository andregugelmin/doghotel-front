import useAsync from '../useAsync';
import * as service from '../../services/authentication';

export default function useCreateUser() {
	const { loading, act, error } = useAsync(service.signup, false);

	return {
		loadingCreatingUser: loading,
		createUser: act,
		creatingUserError: error,
	};
}
