import useAsync from '../useAsync';
import * as service from '../../services/request';

export default function useUpdateRequest() {
	const { loading, act, error } = useAsync(service.updateRequests, false);

	return {
		loadingUpdateRequest: loading,
		updateRequest: act,
		UpdateRequestError: error,
	};
}
