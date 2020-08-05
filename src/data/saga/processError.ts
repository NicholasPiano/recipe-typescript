
import { put } from 'redux-saga/effects';

import actions from '../actions';

function* processError({ id, error }: { id: string, error: Object }) {
  yield put(actions.fetchError({ id, error }));
}

export default processError;
