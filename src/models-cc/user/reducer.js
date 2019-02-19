import { query as queryUsers, queryCurrent } from '../../services/user';

function changeLoadingToTrue() {
  return { loading: true };
}

function* fetch({ dispatch }) {
  yield dispatch({ type: 'changeLoadingToTrue' });
  const list = yield queryUsers();
  return { list, loading: false };
}

function* fetchCurrent() {
  const currentUser = yield queryCurrent();
  return { currentUser };
}

export default {
  changeLoadingToTrue,
  fetch,
  fetchCurrent,
}