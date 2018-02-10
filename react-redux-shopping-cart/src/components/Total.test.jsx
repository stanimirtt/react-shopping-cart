import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Total from './Total';
import mockData from '../data/mockData';

describe('Total', () => {
  it('should render strong with total amount', () => {
    const props = {
      items: [...mockData.items],
      columns: [...mockData.columns]
    };
    const expectedText = 'Total $18.00';
    const wrapper = shallow(<Total {...props} />);
    const element = wrapper.find('strong');

    expect(element.length).toBe(1);
    expect(element.text()).toBe(expectedText);
  });
});
