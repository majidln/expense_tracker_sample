/* eslint-disable import/prefer-default-export */
import { START_FETCHING } from './type';

export function getCategory(key = 'income') {
  return {
    type: START_FETCHING,
    key,
  };
}
