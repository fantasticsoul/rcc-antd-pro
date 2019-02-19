
import { routerRedux } from 'dva/router';
import { fakeAccountLogin, fakeMobileLogin } from '../../services/api';

function changeSubmittingToTrue() {
  return { submitting: true };
}

function* accountSubmit({ dispatch, payload }) {
  yield dispatch({ type: 'changeSubmittingToTrue' });
  const response = yield fakeAccountLogin(payload);
  return { ...response, submitting: false };
}

function* mobileSubmit({ dispatch, payload }) {
  yield dispatch({ type: 'changeSubmittingToTrue' });
  const response = yield fakeMobileLogin(payload);
  return { ...response, submitting: false };
}

function* logout(_, { put }) {
  __bindedDvaDispatch__(routerRedux.push('/user/login'));
  return { status: false };
}

export default {
  changeSubmittingToTrue,
  accountSubmit,
  mobileSubmit,
  logout,
}