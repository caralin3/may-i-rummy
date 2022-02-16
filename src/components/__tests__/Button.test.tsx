import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';

describe('Button', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<Button title='Press' />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
