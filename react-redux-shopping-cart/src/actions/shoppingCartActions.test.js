import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as shoppingCartActions from './shoppingCartActions';
import * as types from './actionTypes';

// Test a sync action
describe('Shopping Cart Actions', () => {
  describe('updateQuantitySuccess', () => {
    it('should create an UPDATE_QUANTITY_SUCCESS action', () => {
      // arrange
      const item = {
        id: 0,
        name: 'Product 1',
        details:
          'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
        image: 'http://placehold.it/100x100',
        quantity: 1,
        price: 5
      };

      const expectedAction = {
        type: types.UPDATE_QUANTITY_SUCCESS,
        item
      };

      // act
      const action = shoppingCartActions.updateQuantitySuccess(item);

      // assert
      expect(action).toEqual(expectedAction);
    });

    it('should create a REMOVE_ITEM_SUCCESS action', () => {
      // arrange
      const id = 0;

      const expectedAction = {
        type: types.REMOVE_ITEM_SUCCESS,
        id
      };

      // act
      const action = shoppingCartActions.removeItemSuccess(id);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_ITEMS_SUCCESS when loading items', done => {
    // In a real app, you'd likely make a real HTTP call.
    // To mock out that http call, you can use Nock to intercept all
    // calls to a given address or pattern. This means you can test
    // without making actual HTTP calls, and specify the data
    // your mock API should return. Since we're already hitting a mock
    // API, there's no need to call nock in this test.

    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 'clean-code', title: 'Clean Code'}] }});

    const expectedActions = [{ type: types.BEGIN_AJAX_CALL }, { type: types.LOAD_ITEMS_SUCCESS }];
    const store = mockStore({ items: [] }, expectedActions, done);

    store.dispatch(shoppingCartActions.loadItems()).then(() => {
      const actions = store.getActions();

      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_ITEMS_SUCCESS);
      done();
    });
  });

  describe('Shopping Cart Actions Thunk', () => {
    it('should create BEGIN_AJAX_CALL and UPDATE_QUANTITY_SUCCESS when update item', done => {
      // In a real app, you'd likely make a real HTTP call.
      // To mock out that http call, you can use Nock to intercept all
      // calls to a given address or pattern. This means you can test
      // without making actual HTTP calls, and specify the data
      // your mock API should return. Since we're already hitting a mock
      // API, there's no need to call nock in this test.

      // Here's an example call to nock.
      // nock('http://example.com/')
      //   .get('/courses')
      //   .reply(200, { body: { course: [{ id: 'clean-code', title: 'Clean Code'}] }});

      const expectedActions = [{ type: types.BEGIN_AJAX_CALL }, { type: types.UPDATE_QUANTITY_SUCCESS }];

      const item = {
        id: 0,
        name: 'Product 1',
        details:
          'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.',
        image: 'http://placehold.it/100x100',
        quantity: 1,
        price: 5
      };

      const store = mockStore({ items: [] }, expectedActions, done);

      store.dispatch(shoppingCartActions.updateQuantity(item)).then(() => {
        const actions = store.getActions();

        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.UPDATE_QUANTITY_SUCCESS);
        done();
      });
    });
  });

  it('should create BEGIN_AJAX_CALL and REMOVE_ITEM_SUCCESS when removing item', done => {
    // In a real app, you'd likely make a real HTTP call.
    // To mock out that http call, you can use Nock to intercept all
    // calls to a given address or pattern. This means you can test
    // without making actual HTTP calls, and specify the data
    // your mock API should return. Since we're already hitting a mock
    // API, there's no need to call nock in this test.

    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 'clean-code', title: 'Clean Code'}] }});

    const expectedActions = [{ type: types.BEGIN_AJAX_CALL }, { type: types.REMOVE_ITEM_SUCCESS }];
    const id = 0;
    const store = mockStore({ items: [] }, expectedActions, done);

    store.dispatch(shoppingCartActions.removeItem(id)).then(() => {
      const actions = store.getActions();

      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.REMOVE_ITEM_SUCCESS);
      done();
    });
  });
});
