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
        fetchInventory();
      });
  }
}

export {setStoreInventory, createInventoryItem, fetchInventory};
