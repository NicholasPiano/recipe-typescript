
import { put } from 'redux-saga/effects';

import actions from '../actions';

type processResponseType = {
  id: string,
  response: Object,
};

function* processResponse({ id, response }: processResponseType) {
  yield put(actions.fetchResponse({ id, response }));
}

export default processResponse;
