import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render the component with no props', () => {
    expect((shallow(<Header />))).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
