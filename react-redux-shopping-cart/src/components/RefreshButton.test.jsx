import expect from 'expect';
import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import RefreshButton from './RefreshButton';
import TestHelper from '../helpers/TestHelper';

describe('RefreshButton', () => {
  it('should render anchor and icon', () => {
    const props = {
      updateQuantity: () => {}
    };

    const wrapper = shallow(<RefreshButton {...props} />);
    const button = wrapper.find('button');

    TestHelper.expectElement(button, 'btn btn-info btn-sm');

    const icon = wrapper.find('i');

    TestHelper.expectElement(icon, 'fa fa-refresh');
  });

  it('simulates update quantity item event', () => {
    const updateQuantity = sinon.spy();
    const props = {
      updateQuantity
    };
    const wrapper = shallow(<RefreshButton {...props} />);
    const mockedEvent = {
      target: {},
      preventDefault: () => {}
    };

    wrapper.find('button').simulate('click', mockedEvent);
    expect(updateQuantity.calledOnce).toEqual(true);
  });
});
