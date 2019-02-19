import { queryFakeList } from '../../services/api';

function changeLoadingToTrue() {
  return { loading: true }
}
function changeLoadingToFalse() {
  return { loading: false }
}
function* appendList({ payload }) {
  const response = yield queryFakeList(payload);
  const newList = Array.isArray(response) ? response : []
  const list = moduleState.list;
  return { list: list.concat(newList) };
}

// 该方法是routes/List/BasicList组件真实调用的方法
function* fetch({ moduleState, dispatch, payload }) {
  yield dispatch({ type: 'changeLoadingToTrue' });
  const response = yield queryFakeList(payload);
  const newList = Array.isArray(response) ? response : []
  const list = moduleState.list;
  return { list: list.concat(newList), loading: false };
}

// 为了保持和models/list.js里的effects代码保持一致的思路，这里用另一种写法修改list的state
function* fetch2({ dispatch, payload }) {
  yield dispatch({ type: 'changeLoadingToTrue' });
  yield dispatch({ type: 'appendList', payload });
  yield dispatch({ type: 'changeLoadingToFalse' });
}

export default {
  changeLoadingToTrue,
  changeLoadingToFalse,
  appendList,
  fetch,
  fetch2,
}