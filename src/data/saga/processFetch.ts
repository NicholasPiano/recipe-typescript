
import { call } from 'redux-saga/effects';

import fetchFromRecipePuppy from './fetchFromRecipePuppy';
import processError from './processError';
import processResponse from './processResponse';

interface actionInterface {
  type: symbol,
  payload: {
    id: string,
  },
}

function* processFetch(action: actionInterface) {
  const { id, ...rest } = action.payload;

  const { response, error } = yield fetchFromRecipePuppy({ ...rest });

  if (error) {
    return call(processError, { id, error });
  }

  yield call(processResponse, { id, response });
}

export default processFetch;
