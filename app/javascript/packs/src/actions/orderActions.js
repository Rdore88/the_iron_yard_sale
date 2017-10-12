import {BASE_DEV_URL} from '../constants.js';

export const SET_STORE_ORDERS = 'SET_STORE_ORDERS';

const setStoreOrders = (payload) => {
  return {
    type: SET_STORE_ORDERS,
    payload: payload
  }
}

const fetchOrders = (id) => {
  return (dispatch, getState) => {
    let options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(BASE_DEV_URL + "/api/orders?user_id=" + id, options)
      .then(res => {
        return res.json();
      })
      .then(json => {
        return dispatch(setStoreOrders(json));
      });
  }
}

export {fetchOrders};
