import useAsync from '../useAsync';
import * as service from '../../services/dogs';

export default function useSignUpDog() {
	const { data, loading, act, error } = useAsync(service.signUp, false);

	return {
		loadingSignUpDog: loading,
		signUpDog: act,
		signUpDogError: error,
		signUpDogData: data,
	};
}
