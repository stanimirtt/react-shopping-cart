import { createStore } from 'redux';
import expect from 'expect';
import rootReducer from '../reducers';
import * as shoppingCartActions from '../actions/shoppingCartActions';
import mockData from '../data/mockData';

describe('Store', () => {
  it('should handle update item', () => {
    // arrange
    const store = createStore(rootReducer, { items: [...mockData.items], ajaxCallsInProgress: 0 });
    const items = [...mockData.items];

    // act
    const action = shoppingCartActions.updateQuantitySuccess(items[0]);

    store.dispatch(action);

    // assert
    const actual = store.getState().items[0];
    const expected = mockData.items[0];

    expect(actual).toEqual(expected);
  });

  it('should handle remove item', () => {
    // arrange
    const store = createStore(rootReducer, { items: [...mockData.items], ajaxCallsInProgress: 0 });
    const id = 0;

    // act
    const action = shoppingCartActions.removeItemSuccess(id);

    store.dispatch(action);

    // assert
    expect(store.getState().items.length).toEqual(2);
  });
});
