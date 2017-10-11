export const SET_STORE_INVENTORY = 'STORE_INVENTORY';

const setStoreInventory = (inventoryArray) => {
  return {
    action: SET_STORE_INVENTORY,
    payload: inventoryArray
  }
}

export {setStoreInventory};
