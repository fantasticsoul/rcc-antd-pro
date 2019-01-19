
import { fakeSubmitForm } from '../../services/api';

function* submitRegularForm({ dispatch, payload: params }) {
  dispatch({ module: 'form', type: 'changeRegularFormSubmitting', payload: true });
  yield fakeSubmitForm(params);
  dispatch({ module: 'form', type: 'changeRegularFormSubmitting', payload: false });
  message.success('提交成功');
}

function changeRegularFormSubmitting({ payload: regularFormSubmitting }) {
  return { regularFormSubmitting };
}

export default {
  submitRegularForm,
  changeRegularFormSubmitting,
}