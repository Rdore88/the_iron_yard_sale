import {SET_STORE_ORDERS} from '../actions/orderActions';
import update from 'immutability-helper';

const initialState = {
    orderList: []
}

const orders = function(state = initialState, action) {
  switch (action.type) {
    case SET_STORE_ORDERS:
      return update(state, {
        orderList: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
}

export {orders}
