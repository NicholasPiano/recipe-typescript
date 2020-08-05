
import { actionTypes } from '../constants';

type fetchType = {
  id: string,
  query: string | null,
  ingredients: Array<string>,
  page?: number,
};

const fetch = (parameters: fetchType) => ({
  type: actionTypes.FETCH,
  payload: { ...parameters },
});

export default fetch;
