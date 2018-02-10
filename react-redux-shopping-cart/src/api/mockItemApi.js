import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    id: 0,
    name: 'Product 1',
    details:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
    image: 'http://placehold.it/100x100',
    quantity: 1,
    price: 5
  },
  {
    id: 1,
    name: 'Product 2',
    details:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
    image: 'http://placehold.it/100x100',
    quantity: 1,
    price: 10
  },
  {
    id: 2,
    name: 'Product 3',
    details:
      'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
    image: 'http://placehold.it/100x100',
    quantity: 1,
    price: 3
  }
];

class ItemApi {
  static getAllItems() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static updateQuantity(item) {
    return new Promise(resolve => {
      setTimeout(() => {
        const existingItemIndex = items.findIndex(a => a.id === item.id);

        items.splice(existingItemIndex, 1, item);

        resolve(Object.assign({}, item));
      }, delay);
    });
  }

  static removeItem(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        items.splice(id, 1);
        resolve(id);
      }, delay);
    });
  }
}

export default ItemApi;
