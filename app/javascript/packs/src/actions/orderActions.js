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

const createOrder = (obj) => {
  obj.order.quantity = Number(obj.order.quantity);

  return (dispatch, getState) => {
    let options = {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(BASE_DEV_URL + "/api/orders", options)
      .then(res => {
        return res.json();
      })
      .then(json => {
        // return dispatch(fetchOrders(id));
      });
  }
}

const confirmOrder = (order_id, user_id) => {
  return (dispatch, getState) => {
    let options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(BASE_DEV_URL + "/api/confirm_order/" + order_id + "?user_id=" + user_id, options)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return dispatch(fetchOrders(user_id));
      })
  }
}

const rejectOrder = (order_id, user_id) => {
  return (dispatch, getState) => {
    let options = {
      method: "DELETE",
      body: JSON.stringify({user_id: user_id}),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(BASE_DEV_URL + "/api/orders/" + order_id, options)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return dispatch(fetchOrders(user_id));
      })
  }
}

export {fetchOrders, createOrder, confirmOrder, rejectOrder};
