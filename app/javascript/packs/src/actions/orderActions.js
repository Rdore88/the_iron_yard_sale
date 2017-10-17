import {BASE_DEV_URL} from '../constants.js';
import {subtractQuantity} from './index';

export const SET_STORE_ORDERS = 'SET_STORE_ORDERS';
export const SET_ORDER_ERROR_MESSAGES = 'SET_ORDER_ERROR_MESSAGES';
export const SET_SUCCESSFUL_ORDER_MESSAGES = 'SET_SUCCESSFUL_ORDER_MESSAGES';

const setStoreOrders = (payload) => {
  return {
    type: SET_STORE_ORDERS,
    payload: payload
  }
}

const setOrderErrorMessages = (payload) => {
  return {
    type: SET_ORDER_ERROR_MESSAGES,
    payload: payload
  }
}

const setSuccessfulOrderMessages = (payload) => {
  return {
    type: SET_SUCCESSFUL_ORDER_MESSAGES,
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
        if (json.status !== "success" && json.status) {
          return dispatch(setOrderErrorMessages(json.message))
        }
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
        if (json.status !== "success") {
          return dispatch(setOrderErrorMessages(json.message))
        }
        return dispatch(setSuccessfulOrderMessages(json.message))
      });
  }
}

const confirmOrder = (action, user_id) => {
  return (dispatch, getState) => {
    let options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(BASE_DEV_URL + "/api/confirm_order/" + action.order_id + "?user_id=" + user_id, options)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.status !== "success") {
          return dispatch(setOrderErrorMessages(json.message))
        }
        let quantityObj = {
          user_id: user_id,
          item: {
            quantity: action.amountChanged
          }
        }

        let options = {
          method: "PUT",
          body: JSON.stringify(quantityObj),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        fetch(BASE_DEV_URL + "/api/subtract_quantity/" + action.item_id, options)
          .then(res => {
            return res.json();
          })
          .then(json2 => {
            if (json2.status !== "success") {
              return dispatch(setOrderErrorMessages(json2.message))
            }
            return dispatch(fetchOrders(user_id));
          })
          .catch(err => {
            return dispatch(fetchOrders(user_id));
          })

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
