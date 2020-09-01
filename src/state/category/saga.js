import {
  race, put, delay, takeEvery
} from 'redux-saga/effects';
import { START_FETCHING, FETCHING_DONE, FETCHING_ERROR } from './type';

function* fetchCategory(action) {
  const { key } = action;
  const { categories } = yield race({
    categories: [
      { title: 'POST ARRAY 1' }
    ],
    timeout: delay(5000)
  });

  if (categories) yield put({ type: FETCHING_DONE, payload: categories, key });
  else yield put({ type: FETCHING_ERROR, key });
}

export default [
  takeEvery(START_FETCHING, fetchCategory),
];
