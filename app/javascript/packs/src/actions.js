export const STORE_INVENTORY = 'STORE_INVENTORY';

export const storeInventory = (inventoryArray) => {
  return {
    action: 'STORE_INVENTORY',
    payload: inventoryArray
  }
}
