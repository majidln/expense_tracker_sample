import { all } from 'redux-saga/effects';
import { categorySaga } from './category/saga';
import { typeSaga } from './type/saga';

export default function* rootSaga() {
  yield all([...categorySaga, ...typeSaga]);
}
