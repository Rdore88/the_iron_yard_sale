import {BASE_DEV_URL} from '../constants.js';

export const SET_USER_ID = 'SET_USER_ID';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const setUser = (payload) => {
  return {
    type: SET_USER_ID,
    payload: payload
  }
}

const setLoginError = (payload) => {
  return {
    type: SET_LOGIN_ERROR,
    payload: payload
  }
}

const login = (action) => {
    return (dispatch, getState) => {

      let formBody = [];
      for (let key in action) {
        formBody.push(key + '=' + action[key])
      }

      formBody = formBody.join("&");

      let options = {
        method: "POST",
        body: formBody,
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }

      fetch(BASE_DEV_URL + "/api/users", options)
        .then(res => {
          return res.json();
        })
        .then(json => {
          if (json.status !== "success") {
            return dispatch(setLoginError(json.message))
          }
          return dispatch(setUser(json.user_id));
        });
    }
}

export {login};
