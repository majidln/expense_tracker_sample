/* eslint-disable import/prefer-default-export */
import { ADD_ITEM, START_FETCHING } from './type';

export function addOutcome(payload) {
  return {
    type: ADD_ITEM,
    payload,
  };
}

export function getOutcomes() {
  return {
    type: START_FETCHING,
  };
}
