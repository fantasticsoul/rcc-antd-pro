import { queryBasicProfile, queryAdvancedProfile } from '../../services/api';

function changeBasicLoading({ payload: { basicLoading } }) {
  return { basicLoading }
}
function changeAdvancedLoading({ payload: { advancedLoading } }) {
  return { advancedLoading }
}

function* fetchBasic({ dispatch }) {
  yield dispatch({ type: 'changeBasicLoading', payload: { basicLoading: true } });
  const response = yield queryBasicProfile();
  const newPartialState = { ...response, basicLoading: false };
  return newPartialState;
}

function* fetchAdvanced({ dispatch }) {
  yield dispatch({ type: 'changeAdvancedLoading', payload: { advancedLoading: true } });
  const response = yield queryAdvancedProfile();
  const newPartialState = { ...response, advancedLoading: false };
  return newPartialState;
}

export default {
  changeBasicLoading,
  changeAdvancedLoading,
  fetchBasic,
  fetchAdvanced,
}