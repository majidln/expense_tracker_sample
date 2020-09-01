import {
  put, takeEvery
} from 'redux-saga/effects';
import { START_FETCHING, FETCHING_DONE, FETCHING_ERROR } from './type';
import { apiGet } from '../../services/api';

function* fetchCategory(action) {
  const { key } = action;
  try {
    const categories = yield apiGet(require('../../assets/data/categories.json'));
    yield put({ type: FETCHING_DONE, payload: categories.data[key], key });
  } catch (error) {
    yield put({ type: FETCHING_ERROR, key });
  }
}

export const categorySaga = [
  takeEvery(START_FETCHING, fetchCategory),
];
