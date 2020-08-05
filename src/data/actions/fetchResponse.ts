
import { actionTypes } from '../constants';

type fetchResponseType = {
  id: string,
  response: Object,
};

const fetchResponse = (parameters: fetchResponseType) => ({
  type: actionTypes.FETCH_RESPONSE,
  payload: { ...parameters },
});

export default fetchResponse;
