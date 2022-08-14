import useAsync from '../useAsync';
import * as service from '../../services/request';

export default function useGetRequests() {
	const { data, loading, act, error } = useAsync(service.getRequests, false);

	return {
		loadingGetRequests: loading,
		getRequests: act,
		GetRequestsError: error,
		requests: data,
	};
}
