import { combineReducers } from 'redux';

import categoryReducer from './category/reducer';
import typeReducer from './type/reducer';
import incomeReducer from './income/reducer';

const appReducer = combineReducers({
  categories: categoryReducer, // hold the category list
  types: typeReducer, // hold income types list
  income: incomeReducer,
});

export default appReducer;
