import { START_FETCHING } from './type';

export default function getCategory(key = 'income') {
  return {
    type: START_FETCHING,
    key,
  };
}
