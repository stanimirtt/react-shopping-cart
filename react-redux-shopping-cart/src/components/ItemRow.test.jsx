import expect from 'expect';
import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import ItemRow from './ItemRow';
import mockData from '../data/mockData';

const expectedColumn = [
  {
    title: 'Item',
    validator: element => {
      expect(
        element
          .find('div')
          .at(0)
          .hasClass('row')
      ).toEqual(true);
      expect(
        element
          .find('div')
          .at(1)
          .hasClass('col-sm-2 hidden-xs')
      ).toEqual(true);

      const img = element.find('img');
      const expectedSrc = 'http://placehold.it/100x100';

      expect(img.props().src).toEqual(expectedSrc);
      expect(img.hasClass('img-responsive')).toEqual(true);

      const name = element.find('h4');
      const expectedName = 'Product 1';
      const expectedDetails =
        'Quis aute iure reprehenderit in voluptate velit esse cillum ' +
        'dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.';

      expect(name.hasClass('nomargin')).toEqual(true);
      expect(name.text()).toEqual(expectedName);
      expect(element.find('p').text()).toEqual(expectedDetails);
    }
  },
  {
    title: 'Price',
    validator: element => {
      const expectedQuantity = '$5.00';

      expect(element.text()).toEqual(expectedQuantity);
    }
  },
  {
    title: 'Quantity',
    validator: element => {
      const input = element.find('input');

      expect(input.length).toBe(1);
      expect(input.props().type).toBe('number');
      expect(input.props().min).toBe(0);
      expect(input.props().defaultValue).toBe(1);
      expect(input.hasClass('form-control text-center')).toEqual(true);
    }
  },
  {
    title: 'Subtotal',
    validator: element => {
      const expectedSubtotal = '$5.00';

      expect(element.hasClass('text-center')).toEqual(true);
      expect(element.text()).toEqual(expectedSubtotal);
    }
  },
  {
    title: '',
    validator: element => {
      expect(element.find('RefreshButton').length).toBe(1);
      expect(element.find('DeleteButton').length).toBe(1);
    }
  }
];

describe('Item row', () => {
  it('should render columns with markup', () => {
    const props = {
      item: Object.assign({}, mockData.items[0]),
      columns: [...mockData.columns],
      min: 0,
      changeQuantity: () => {},
      updateQuantity: () => {},
      removeItem: () => {}
    };

    const wrapper = shallow(<ItemRow {...props} />);
    const element = wrapper.find('tr');

    expect(element.length).toBe(1);

    const columns = element.find('td');

    expect(columns.length).toBe(5);

    columns.forEach((column, i) => {
      expect(column.props()['data-th']).toEqual(expectedColumn[i].title);

      expectedColumn[i].validator(column);
    });
  });

  it('simulates change event', () => {
    const onChangeQuantity = sinon.spy();
    const props = {
      item: Object.assign({}, mockData.items[0]),
      columns: [...mockData.columns],
      min: 0,
      changeQuantity: onChangeQuantity,
      updateQuantity: () => {},
      removeItem: () => {}
    };

    const wrapper = shallow(<ItemRow {...props} />);
    const mockedEvent = {
      target: {
        value: 2
      }
    };

    wrapper.find('input').simulate('change', mockedEvent);
    expect(onChangeQuantity.calledOnce).toEqual(true);
  });
});
