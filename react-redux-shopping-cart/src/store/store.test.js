import { createStore } from 'redux';
import expect from 'expect';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as shoppingCartActions from '../actions/shoppingCartActions';
import mockData from '../data/mockData';

describe('Store', () => {
  it('should handle update item', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const item = mockData.items[0];

    // act
    const action = shoppingCartActions.updateQuantitySuccess(item);

    store.dispatch(action);

    // assert
    const actual = store.getState().items[0];
    const expected = mockData.items[0];

    expect(actual).toEqual(expected);
  });

  it('should handle remove item', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const id = 0;

    // act
    const action = shoppingCartActions.removeItemSuccess(id);

    store.dispatch(action);

    // assert
    const actual = store.getState().items[0];
    const expected = undefined;

    expect(actual).toEqual(expected);
  });
});
