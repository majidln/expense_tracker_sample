import { combineReducers } from 'redux';

import categoryReducer from './category/reducer';
import typeReducer from './type/reducer';
import incomeReducer from './income/reducer';
import outcomeReducer from './outcome/reducer';

const appReducer = combineReducers({
  categories: categoryReducer, // hold the category list
  types: typeReducer, // hold income types list
  income: incomeReducer,
  outcome: outcomeReducer,
});

export default appReducer;
