import useAsync from '../useAsync';
import * as service from '../../services/request';

export default function useSendRequest() {
	const { loading, act, error } = useAsync(service.sendRequest, false);

	return {
		loadingSendRequest: loading,
		sendRequest: act,
		SendRequestError: error,
	};
}
