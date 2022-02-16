import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from '../Text';

describe('Text', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<Text>Text</Text>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  test('renders bold correctly', () => {
    const wrapper = renderer.create(<Text bold>Text</Text>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  test('renders italic correctly', () => {
    const wrapper = renderer.create(<Text italic>Text</Text>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  test('renders large font size correctly', () => {
    const wrapper = renderer.create(<Text size='lg'>Text</Text>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
