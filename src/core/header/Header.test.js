import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render a snapshot', () => {
    expect((shallow(<Header />))).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
