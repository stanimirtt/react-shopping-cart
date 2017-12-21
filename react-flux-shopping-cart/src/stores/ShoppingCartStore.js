import { EventEmitter } from 'events';
import ShoppingCartDispatcher from '../dispatcher/ShoppingCartDispatcher';
import ShoppingCartConstants from '../constants/ShoppingCartConstants';

const productData = [
  {
    id: 0,
    product: 'Product 1',
    details:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
    image: 'http://placehold.it/100x100',
    quantity: 1,
    price: 5
  },
  {
    id: 1,
    product: 'Product 2',
    details:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
    image: 'http://placehold.it/100x100',
    quantity: 1,
    price: 10
  },
  {
    id: 2,
    product: 'Product 3',
    details:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
    image: 'http://placehold.it/100x100',
    quantity: 1,
    price: 3
  }
];

const columnMapping = [
  {
    title: 'ID',
    key: 'id',
    display: false
  },
  {
    title: 'Product',
    key: 'product'
  },
  {
    title: 'Details',
    key: 'details',
    display: false
  },
  {
    title: 'Image',
    key: 'image',
    display: false
  },
  {
    title: 'Price',
    key: 'price'
  },
  {
    title: 'Quantity',
    key: 'quantity'
  }
];

class ShoppingCartStore extends EventEmitter {
  constructor() {
    super();
    this.dispatchToken = ShoppingCartDispatcher.register(this.dispatcherCallback.bind(this));
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(listener) {
    this.on('change', listener);
  }

  getProducts() {
    return productData;
  }

  getColumns() {
    return columnMapping;
  }

  quantityChanged(index, value) {
    productData[index].quantity = Number(value);
    this.emitChange();
  }

  productRemoved(index) {
    productData.splice(index, 1);
    this.emitChange();
  }

  dispatcherCallback(action) {
    switch (action.actionType) {
      case ShoppingCartConstants.SHOPPING_CART_PRODUCT_QUANTITY_CHANGED: {
        this.quantityChanged(action.index, action.newValue);
        break;
      }
      case ShoppingCartConstants.SHOPPING_CART_PRODUCT_REMOVED: {
        this.productRemoved(action.index);
        break;
      }
    }
  }
}

export default new ShoppingCartStore();
