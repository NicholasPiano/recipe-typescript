
import { actionTypes } from '../constants';

type fetchErrorType = {
  id: string,
  error: Object,
};

const fetchError = (parameters: fetchErrorType) => ({
  type: actionTypes.FETCH_ERROR,
  payload: { ...parameters },
});

export default fetchError;
