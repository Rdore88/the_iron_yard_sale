import { combineReducers } from 'redux';
import { inventory } from './inventory';
import { user } from './user';

export default combineReducers({
  inventory,
  user
});
