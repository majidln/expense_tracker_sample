import initialState from './initial';
import {
  START_FETCHING, FETCHING_DONE, FETCHING_ERROR
} from './type';

export default function reducer(state = initialState, action) {
  console.log('reducer', action)
  switch (action && action.type) {
    case START_FETCHING: {
      return {
        ...state,
        fetching: true
      };
    }
    case FETCHING_DONE: {
      return {
        ...state,
        ...action.payload,
        fetching: false
      };
    }
    case FETCHING_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
