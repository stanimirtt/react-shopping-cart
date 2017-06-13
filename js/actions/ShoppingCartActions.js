var ShoppingCartDispatcher = require('../dispatcher/ShoppingCartDispatcher');
var ShoppingCartConstants = require('../constants/ShoppingCartConstants');

var ShoppingCartActions = {

    quantityChange: function(index, newValue) {
        ShoppingCartDispatcher.dispatch({
            actionType: ShoppingCartConstants.SHOPPING_CART_PRODUCT_QUANTITY_CHANGED,
            index: index,
            newValue: newValue
        });
    },

    productRemove: function(index) {
        ShoppingCartDispatcher.dispatch({
            actionType: ShoppingCartConstants.SHOPPING_CART_PRODUCT_REMOVED,
            index: index
        });
    }
    
};

module.exports = ShoppingCartActions;