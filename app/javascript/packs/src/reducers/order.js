import {
  SET_STORE_ORDERS,
  SET_ORDER_ERROR_MESSAGES,
  SET_SUCCESSFUL_ORDER_MESSAGES
} from '../actions/orderActions';
import update from 'immutability-helper';

const initialState = {
    orderList: [],
    orderErrorMessages: '',
    successOrderMessages: ''
}

const orders = function(state = initialState, action) {
  switch (action.type) {
    case SET_STORE_ORDERS:
      return update(state, {
        orderList: {
          $set: action.payload
        }
      });
    case SET_ORDER_ERROR_MESSAGES:
      return update(state, {
        orderErrorMessages: {
          $set: action.payload
        },
        successOrderMessages: {
          $set: ''
        }
      });
    case SET_SUCCESSFUL_ORDER_MESSAGES:
      return update(state, {
        successOrderMessages: {
          $set: action.payload
        },
        orderErrorMessages: {
          $set: ''
        }
      });
    default:
      return state;
  }
}

export {orders}
