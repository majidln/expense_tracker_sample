import {
  put, takeEvery
} from 'redux-saga/effects';
import { START_FETCHING, FETCHING_DONE, FETCHING_ERROR } from './type';
import { apiGet } from '../../services/api';

function* fetchTypes() {
  try {
    const types = yield apiGet(require('../../assets/data/types.json'));
    yield put({ type: FETCHING_DONE, payload: types.data });
  } catch (error) {
    yield put({ type: FETCHING_ERROR });
  }
}

export const typeSaga = [
  takeEvery(START_FETCHING, fetchTypes),
];
