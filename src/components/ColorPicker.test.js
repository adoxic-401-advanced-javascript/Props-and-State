import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Picker component', () => {
  it('renders Color Picker', () => {
    const wrapper = shallow(<ColorPicker selectColor={() => {}}
      colors={['blue']}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
