import expect from 'expect';
import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from './DeleteButton';
import TestHelper from '../helpers/TestHelper';

describe('DeleteButton', () => {
  it('should render anchor and icon', () => {
    const props = {
      removeItem: () => {}
    };
    const wrapper = shallow(<DeleteButton {...props} />);
    const button = wrapper.find('button');

    TestHelper.expectElement(button, 'btn btn-danger btn-sm');

    const icon = wrapper.find('i');

    TestHelper.expectElement(icon, 'fa fa-trash-o');
  });

  it('simulates remove item event', () => {
    const onRemoveItem = sinon.spy();
    const props = {
      removeItem: onRemoveItem
    };
    const wrapper = shallow(<DeleteButton {...props} />);
    const mockedEvent = {
      target: {},
      preventDefault: () => {}
    };

    wrapper.find('button').simulate('click', mockedEvent);
    expect(onRemoveItem.calledOnce).toEqual(true);
  });
});
