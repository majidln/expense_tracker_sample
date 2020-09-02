/* eslint-disable import/prefer-default-export */
import { ADD_ITEM, START_FETCHING } from './type';

export function addIncome(payload) {
  console.log('addIncome', payload);
  return {
    type: ADD_ITEM,
    payload,
  };
}

export function getIncomes() {
  return {
    type: START_FETCHING,
  };
}
