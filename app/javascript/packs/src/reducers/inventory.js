import { SET_STORE_INVENTORY, SET_ITEM_FORM_ERROR } from '../actions/inventoryActions';
import update from 'immutability-helper';

const initialState = {
    inventory: [],
    createItemErrorMessages: ''
}

const inventory = function(state = initialState, action) {
  switch (action.type) {
    case SET_STORE_INVENTORY:
      return update(state, {
        inventory: {
          $set: action.payload
        }
      });
    case SET_ITEM_FORM_ERROR:
      return update(state, {
        createItemErrorMessages: {
          $set: action.payload
        }
      })
    default:
      return state;
  }
}

export {inventory};
