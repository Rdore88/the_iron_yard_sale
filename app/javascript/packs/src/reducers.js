import { STORE_INVENTORY } from './actions';
import update from 'immutability-helper';

const initialState = {
    inventory: []
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case STORE_INVENTORY:
      return update(state, {
        inventory: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
}

export default reducer;
