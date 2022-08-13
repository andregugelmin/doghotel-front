import useAsync from '../useAsync';
import * as service from '../../services/host';

export default function useGetHost() {
	const { data, loading, act, error } = useAsync(service.searchHost, false);

	return {
		loadingGetHost: loading,
		getHost: act,
		getHostError: error,
		host: data,
	};
}
