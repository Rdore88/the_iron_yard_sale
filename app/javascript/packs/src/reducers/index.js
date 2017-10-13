import { combineReducers } from 'redux';
import { inventory } from './inventory';
import { user } from './user';
import { orders } from './order';

export default combineReducers({
  inventory,
  user,
  orders
});
