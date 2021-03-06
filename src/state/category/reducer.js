import initialState from './initial';
import { START_FETCHING, FETCHING_DONE, FETCHING_ERROR } from './type';

export default function reducer(state = initialState, action) {
  switch (action && action.type) {
    case START_FETCHING:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          fetching: true
        }
      };
    case FETCHING_DONE:
      return {
        ...state,
        [action.key]: {
          fetching: false,
          list: action.payload
        }
      };
    case FETCHING_ERROR:
      return state;
    default:
      return state;
  }
}
