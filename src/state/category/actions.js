/* eslint-disable import/prefer-default-export */
import { START_FETCHING } from './type';

export function getCategory(key = 'income') {
  console.log('start fetching action');
  return {
    type: START_FETCHING,
    key,
  };
}
