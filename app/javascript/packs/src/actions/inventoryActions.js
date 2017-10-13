import {BASE_DEV_URL} from '../constants.js';

export const SET_STORE_INVENTORY = 'STORE_INVENTORY';
export const SET_ITEM_FORM_ERROR = 'SET_ITEM_FORM_ERROR';

const setStoreInventory = (inventory) => {
  return {
    type: SET_STORE_INVENTORY,
    payload: inventory
  }
}

const setItemFormError = (error) => {
  return {
    type: SET_ITEM_FORM_ERROR,
    payload: error
  }
}

const fetchInventory = () => {
  return (dispatch, getState) => {
    let options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(BASE_DEV_URL + "/api/items", options)
      .then(res => {
        return res.json();
      })
      .then(json => {
        return dispatch(setStoreInventory(json));
      });
  }
}

const createInventoryItem = (action) => {
  return (dispatch, getState) => {
    let options = {
      method: "POST",
      body: JSON.stringify(action),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(BASE_DEV_URL + "/api/items", options)
      .then(res => {
        return res.json();
      })
      .then(json => {
        if (json.message) {
          return dispatch(setItemFormError(json.message))
        }
        return dispatch(fetchInventory());
      });
  }
}

const deleteInventoryItem = (action) => {
  return (dispatch, getState) => {
    let options = {
      method: "DELETE",
      body: JSON.stringify({user_id: action.user_id}),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(BASE_DEV_URL + "/api/items/" + action.id, options)
      .then(res => {
        return res.json();
      })
      .then(json => {
        // TODO: Need API change for checkout error status
        // if (json.message) {
        //   return dispatch(setItemFormError(json.message))
        // }
        return dispatch(fetchInventory());
      });
  }
}

const subtractQuantity = (action) => {
  
}

export {
  setStoreInventory,
  createInventoryItem,
  fetchInventory,
  deleteInventoryItem,
  subtractQuantity
};
