import * as service from '../../services/dogs';
import useAsync from '../useAsync';

export default function useDogs() {
	const { data, loading, act } = useAsync(service.list, false);

	return {
		dogs: data,
		loadingDogs: loading,
		listDogs: act,
	};
}
