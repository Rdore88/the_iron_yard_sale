import { SET_STORE_INVENTORY } from '../actions/inventoryActions';
import update from 'immutability-helper';

const initialState = {
    inventory: []
}

const inventory = function(state = initialState, action) {
  switch (action.type) {
    case SET_STORE_INVENTORY:
      return update(state, {
        inventory: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
}

export {inventory};
