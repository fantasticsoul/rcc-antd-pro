import { queryTags } from '../../services/api';

function* fetchTags() {
  const { list: tags } = yield queryTags();
  return { tags };
}

export default {
  fetchTags,
}