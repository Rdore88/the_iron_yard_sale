import {BASE_DEV_URL} from '../constants.js';

export const SET_USER = 'SET_USER';

const setUser = (payload) => {
  return {
    type: SET_USER,
    payload: payload
  }
}

const login = (action) => {
    return (dispatch, getState) => {
      let options = {
        method: "POST",
        body: action.payload
      }

      fetch(BASE_DEV_URL + "/api/users", options)
        .then(res => {
          console.log("RESPONSE: ", res);
          return res.json();
        })
        .then(json => {
          console.log("JSON: ", json);
          dispatch(setUser(json));
        });
    }
}

export {login};
