
import { queryRule, removeRule, addRule } from '../../services/api';

function* _operateAction(fn, dispatch, payload) {
  yield dispatch({ type: 'changeLoadingToTrue' });
  const data = yield fn(payload);
  return { data, loading: false };
}

function changeLoadingToTrue() {
  return { loading: true }
}

function* fetch({ payload, dispatch }) {
  const ret = yield _operateAction(queryRule, dispatch, payload);
  return ret;
}

function* add({ payload, dispatch }) {
  const ret = yield _operateAction(addRule, dispatch, payload);
  return ret;
}

function* remove({ payload, dispatch }) {
  const ret = yield _operateAction(removeRule, dispatch, payload);
  return ret;
}

export default {
  changeLoadingToTrue,
  fetch,
  add,
  remove,
}