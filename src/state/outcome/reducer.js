import initialState from './initial';
import {
  ADD_ITEM, ADD_DONE, ADD_ERROR, START_FETCHING, FETCHING_DONE, FETCHING_ERROR
} from './type';

export default function reducer(state = initialState, action) {
  switch (action && action.type) {
    case ADD_ITEM:
      return {
        ...state,
        adding: true,
      };
    case ADD_DONE: {
      return {
        ...state,
        list: [
          action.payload,
          ...state.list
        ],
        adding: false,
      }
    }
    case START_FETCHING: {
      return {
        ...state,
        fetching: true
      };
    }
    case FETCHING_DONE: {
      return {
        ...state,
        list: action.payload,
        fetching: false
      };
    }
    case ADD_ERROR:
    case FETCHING_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
