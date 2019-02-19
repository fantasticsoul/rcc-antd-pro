import { queryProjectNotice } from '../../services/api';

function changeLoadingToTrue() {
  return { loading: true };
}

function* fetchNotice({ dispatch }) {
  dispatch({ type: 'changeLoadingToTrue' });
  const response = yield queryProjectNotice();
  const notice = Array.isArray(response) ? response : [];
  return { notice, loading: false };
}

export default {
  changeLoadingToTrue,
  fetchNotice,
}