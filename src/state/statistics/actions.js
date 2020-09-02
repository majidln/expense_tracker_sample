/* eslint-disable import/prefer-default-export */
import { START_FETCHING } from './type';

export function getStatistics() {
  return {
    type: START_FETCHING,
  };
}
