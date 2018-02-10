import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import TestHelper from '../helpers/TestHelper';

describe('Button', () => {
  it('should render anchor and icon with warning class, left direction and text', () => {
    const props = {
      url: '#',
      type: 'warning',
      direction: 'left',
      text: 'Test'
    };
    const wrapper = shallow(<Button {...props} />);
    const anchor = wrapper.find('a');

    TestHelper.expectAnchor(anchor, 'btn btn-warning', ' Test');

    const icon = wrapper.find('i');

    TestHelper.expectIcon(icon, 'fa fa-angle-left');
  });

  it('should render anchor and icon with success class, right direction and text', () => {
    const props = {
      url: '#',
      type: 'success',
      direction: 'right',
      text: 'Test'
    };
    const wrapper = shallow(<Button {...props} />);
    const anchor = wrapper.find('a');

    TestHelper.expectAnchor(anchor, 'btn btn-success btn-block', 'Test ');

    const icon = wrapper.find('i');

    TestHelper.expectIcon(icon, 'fa fa-angle-right');
  });
});
