import { takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { fetchDataSuccess, fetchDataFailure, actionTypes } from './actions';

export function* fetchDataSaga() {
  try {
    const resp = yield call(fetch, 'https://api/endpoint');
    const result = yield resp.json();
    yield put(fetchDataSuccess(result.data));
    yield put(push('/data-page'));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export default function* dataSaga() {
  yield takeEvery(actionTypes.FETCH_DATA.REQUEST, fetchDataSaga);
}
