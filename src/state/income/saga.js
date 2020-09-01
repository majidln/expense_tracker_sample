import {
  put, takeEvery, call
} from 'redux-saga/effects';
import {
  ADD_ITEM, ADD_DONE, START_FETCHING, ADD_ERROR, FETCHING_DONE, FETCHING_ERROR
} from './type';
import { apiPost, apiGet } from '../../services/api';

function* addIncome(action) {
  try {
    const newIncomes = yield apiPost(action.payload.income);
    yield put({ type: ADD_DONE, payload: newIncomes.data });
    // yield call(action.goBack);
  } catch (error) {
    yield put({ type: FETCHING_ERROR, payload: error });
  }
}

function* getIncomes() {
  try {
    const incomes = yield apiGet(require('../../assets/data/categories.json'));
    yield put({ type: FETCHING_DONE, payload: incomes });
  } catch (error) {
    yield put({ type: ADD_ERROR, payload: error });
  }
}

export const incomeSaga = [
  takeEvery(ADD_ITEM, addIncome),
  takeEvery(START_FETCHING, getIncomes),
];
