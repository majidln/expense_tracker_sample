import { combineReducers } from 'redux';

import categoryReducer from './category/reducer';

const appReducer = combineReducers({
  categoryReducer, // hold the category list
});

export default appReducer;
