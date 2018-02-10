import expect from 'expect';
import React from 'react';
import { createMockStore } from 'redux-test-utils';
import ShoppingCartContainer from './ShoppingCartContainer';
import mockData from '../data/mockData';
import shallowWithStore from '../helpers/shallowWithStore';

describe('Shopping cart container', () => {
  it('should render', () => {
    const props = {
      items: mockData.items
    };
    const testState = {
      items: []
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<ShoppingCartContainer {...props} />, store);

    expect(component).toBeA('object');
  });
});
