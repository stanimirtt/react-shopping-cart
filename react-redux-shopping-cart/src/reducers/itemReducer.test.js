import expect from 'expect';
import itemReducer from './itemReducer';
import * as actions from '../actions/shoppingCartActions';
import mockData from '../data/mockData';

describe('Item Reducer', () => {
  it('should load items when passed LOAD_ITEMS_SUCCESS', () => {
    // arrange
    const initialState = [];

    const { items } = mockData;

    const action = actions.loadItemsSuccess(items);

    // act
    const newState = itemReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
  });

  it('should update quantity when passed UPDATE_QUANTITY_SUCCESS', () => {
    // arrange
    const initialState = mockData.items;

    const item = {
      id: 1,
      name: 'Product 2',
      details:
        'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
      image: 'http://placehold.it/100x100',
      quantity: 2,
      price: 10
    };

    const action = actions.updateQuantitySuccess(item);

    // act
    const newState = itemReducer(initialState, action);
    const updatedItem = newState.find(a => a.id === item.id);
    const untouchedItem = newState.find(a => a.id === 0);

    // assert
    expect(updatedItem.quantity).toEqual(2);
    expect(untouchedItem.quantity).toEqual(1);
    expect(newState.length).toEqual(3);
  });

  it('should remove item when passed REMOVE_ITEM_SUCCESS', () => {
    // arrange
    const initialState = mockData.items;

    const id = 1;

    const action = actions.removeItemSuccess(id);

    // act
    const newState = itemReducer(initialState, action);
    const removedItem = newState.find(a => a.id === id);
    const untouchedItem = newState.find(a => a.id === 0);

    // assert
    expect(removedItem).toEqual(undefined);
    expect(untouchedItem.id).toEqual(0);
    expect(newState.length).toEqual(2);
  });
});
