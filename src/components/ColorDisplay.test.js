import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  it('renders ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay backgroundColor={['blue']}
      height={'100px'}
      width={'100px'}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
