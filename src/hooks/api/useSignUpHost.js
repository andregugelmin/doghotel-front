import useAsync from '../useAsync';
import * as service from '../../services/host';

export default function useSignUpHost() {
	const { loading, act, error } = useAsync(service.signUpHost, false);

	return {
		loadingSignUpHost: loading,
		signUpHost: act,
		signUpHostError: error,
	};
}
