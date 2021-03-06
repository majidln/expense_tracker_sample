import {
  put, takeEvery
} from 'redux-saga/effects';
import {
  ADD_ITEM, ADD_DONE, START_FETCHING, ADD_ERROR, FETCHING_DONE, FETCHING_ERROR
} from './type';
import { apiPost, apiGet } from '../../services/api';

function* addOutcome(action) {
  try {
    const now = new Date();
    const created = `${now.getMonth()}/${now.getDay()}/${now.getFullYear()}-${now.getHours()}:${now.getMinutes()}`;
    const newOutcomes = yield apiPost({ ...action.payload.outcome, created });
    if (action.payload && action.payload.callback) {
      action.payload.callback();
    }
    yield put({ type: ADD_DONE, payload: newOutcomes.data });
    // yield call(action.goBack);
  } catch (error) {
    yield put({ type: FETCHING_ERROR, payload: error });
  }
}

function* getOutcomes() {
  try {
    const outcomes = yield apiGet(require('../../assets/data/categories.json'));
    yield put({ type: FETCHING_DONE, payload: outcomes });
  } catch (error) {
    yield put({ type: ADD_ERROR, payload: error });
  }
}

export const outcomeSaga = [
  takeEvery(ADD_ITEM, addOutcome),
  takeEvery(START_FETCHING, getOutcomes),
];
