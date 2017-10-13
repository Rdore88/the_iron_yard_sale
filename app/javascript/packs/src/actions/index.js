import {
  setStoreInventory,
  createInventoryItem,
  fetchInventory,
  deleteInventoryItem,
  subtractQuantity
} from './inventoryActions.js';
import {
  fetchOrders,
  createOrder,
  confirmOrder,
  rejectOrder
} from './orderActions.js';
import {
  login
} from './loginActions.js';

export {
  setStoreInventory,
  login,
  createInventoryItem,
  fetchInventory,
  deleteInventoryItem,
  fetchOrders,
  createOrder,
  confirmOrder,
  rejectOrder,
  subtractQuantity
}
