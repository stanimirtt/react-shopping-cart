import ShoppingCartDispatcher from '../dispatcher/ShoppingCartDispatcher';
import ShoppingCartConstants from '../constants/ShoppingCartConstants';

class ShoppingCartActions {
  quantityChange(index, newValue) {
    ShoppingCartDispatcher.dispatch({
      actionType: ShoppingCartConstants.SHOPPING_CART_PRODUCT_QUANTITY_CHANGED,
      index,
      newValue
    });
  }

  productRemove(index) {
    ShoppingCartDispatcher.dispatch({
      actionType: ShoppingCartConstants.SHOPPING_CART_PRODUCT_REMOVED,
      index
    });
  }
}

export default new ShoppingCartActions();
