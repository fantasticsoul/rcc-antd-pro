import { fakeChartData } from '../../services/api';
import { getInitialState } from './state';

function changeInputValue({ payload: { value } }) {
  return { inputValue: value };
}

export default {
  changeInputValue
}