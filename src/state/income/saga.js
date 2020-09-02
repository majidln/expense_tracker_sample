import {
  put, takeEvery
} from 'redux-saga/effects';
import {
  ADD_ITEM, ADD_DONE, FETCHING_ERROR
} from './type';
import { apiPost } from '../../services/api';

function* addIncome(action) {
  try {
    const now = new Date();
    const created = `${now.getMonth()}/${now.getDay()}/${now.getFullYear()}-${now.getHours()}:${now.getMinutes()}`;
    const newIncomes = yield apiPost({ ...action.payload.income, created });
    if (action.payload && action.payload.callback) {
      action.payload.callback();
    }
    yield put({ type: ADD_DONE, payload: newIncomes.data });
    // yield call(action.goBack);
  } catch (error) {
    yield put({ type: FETCHING_ERROR, payload: error });
  }
}

export const incomeSaga = [
  takeEvery(ADD_ITEM, addIncome),
];
