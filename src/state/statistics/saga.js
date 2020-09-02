import {
  put, takeEvery
} from 'redux-saga/effects';
import {
  START_FETCHING, FETCHING_DONE, FETCHING_ERROR
} from './type';
import { apiGet } from '../../services/api';

function* getStatistics() {
  try {
    const statistics = yield apiGet(require('../../assets/data/statistics.json'));
    yield put({ type: FETCHING_DONE, payload: statistics.data });
  } catch (error) {
    yield put({ type: FETCHING_ERROR, payload: error });
  }
}

export const statisticsSaga = [
  takeEvery(START_FETCHING, getStatistics),
];
