import { SET_LOGIN_ERROR, SET_USER_ID } from '../actions/loginActions';
import update from 'immutability-helper';

const initialState = {
    user_id: undefined,
    loginErrorMessages: ''
}

const user = function(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_ERROR:
      return update(state, {
        loginErrorMessages: {
          $set: action.payload
        }
      });
    case SET_USER_ID:
      return update(state, {
        user_id: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
}

export {user};
