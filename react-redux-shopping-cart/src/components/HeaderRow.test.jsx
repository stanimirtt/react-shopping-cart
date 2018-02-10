import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import HeaderRow from './HeaderRow';
import mockData from '../data/mockData';

describe('HeaderRow', () => {
  it('should render th columns with titles', () => {
    const props = {
      items: [...mockData.items],
      columns: [...mockData.columns]
    };

    const wrapper = shallow(<HeaderRow {...props} />);
    const element = wrapper.find('tr');

    expect(element.length).toBe(1);

    const columns = element.find('th');

    expect(columns.length).toBe(5);

    const expectedColumn = [
      {
        title: 'Name'
      },
      {
        title: 'Price'
      },
      {
        title: 'Quantity'
      },
      {
        title: 'Subtotal',
        class: 'text-center'
      },
      {
        title: ''
      }
    ];

    columns.forEach((column, i) => {
      expect(column.text()).toEqual(expectedColumn[i].title);

      if (i === 3) {
        expect(column.hasClass(expectedColumn[i].class)).toEqual(true);
      }
    });
  });
});
