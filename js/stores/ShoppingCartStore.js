var EventEmitter = require('events').EventEmitter;
var ShoppingCartDispatcher = require('../dispatcher/ShoppingCartDispatcher');
var ShoppingCartConstants = require('../constants/ShoppingCartConstants');

var productData = [{
	id: 0,
	product: "Product 1",
	details: "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.",
	image: "http://placehold.it/100x100",
	quantity: 1,
	price: 5
}, {
	id: 1,
	product: "Product 2",
	details: "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.",
	image: "http://placehold.it/100x100",
	quantity: 1,
	price: 10
}, {
	id: 2,
	product: "Product 3",
	details: "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.",
	image: "http://placehold.it/100x100",
	quantity: 1,
	price: 3
}], 
columnMapping = [{
	title: 'ID',
	key: 'id',
	display: false
}, { 
	title: 'Product',
	key: 'product' 
}, {
	title: 'Details',
	key: 'details',
	display: false
}, {
	title: 'Image',
	key: 'image',
	display: false
}, {
	title: 'Price',
	key: 'price'
}, {
	title: 'Quantity',
	key: 'quantity'
}];

var ShoppingCartStore = new EventEmitter();

ShoppingCartStore.emitChange = function() {
    this.emit('change');  
};

ShoppingCartStore.addChangeListener = function(listener) {
    this.on('change', listener);
};

ShoppingCartStore.getProducts = function() {
    return productData;
};

ShoppingCartStore.getColumns = function() {
    return columnMapping;
};

ShoppingCartStore.quantityChanged = function(index, value) {
    productData[index].quantity = Number(value);
    this.emitChange();
}

ShoppingCartStore.productRemoved = function(index) {
    productData.splice(index, 1);
    this.emitChange();
}

ShoppingCartDispatcher.register(function(action) {

    switch(action.actionType) {
        case ShoppingCartConstants.SHOPPING_CART_PRODUCT_QUANTITY_CHANGED: {
            ShoppingCartStore.quantityChanged(action.index, action.newValue);
            break;
        }
        case ShoppingCartConstants.SHOPPING_CART_PRODUCT_REMOVED: {
            ShoppingCartStore.productRemoved(action.index);
            break;
        }
    }
    
});

module.exports = ShoppingCartStore;
