import { fakeChartData } from '../../services/api';
import { getInitialState } from './state';

function* fetch() {
  const response = yield fakeChartData();
  return response;
}

function* fetchSalesData() {
  const response = yield fakeChartData();
  const salesData = response.salesData;
  return { salesData };
}

function clear() {
  const originalState = getInitialState();
  return originalState;
}

export default {
  fetch,
  fetchSalesData,
  clear,
}