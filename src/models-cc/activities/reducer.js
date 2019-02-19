import { queryActivities } from '../../services/api';

function changeLoadingToTrue() {
  return { loading: true };
}

function* fetchList({ dispatch }) {
  yield dispatch({ type: 'changeLoadingToTrue' });
  const response = queryActivities();
  const list = Array.isArray(response) ? response : [];
  return { list, loading: false };
}

export default {
  changeLoadingToTrue,
  fetchList,
}