import { all } from 'redux-saga/effects';
import { categorySaga } from './category/saga';
import { typeSaga } from './type/saga';
import { incomeSaga } from './income/saga';
import { outcomeSaga } from './outcome/saga';
import { statisticsSaga } from './statistics/saga';

export default function* rootSaga() {
  yield all([
    ...categorySaga,
    ...typeSaga,
    ...incomeSaga,
    ...outcomeSaga,
    ...statisticsSaga
  ]);
}
