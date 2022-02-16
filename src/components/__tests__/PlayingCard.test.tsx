import React from 'react';
import renderer from 'react-test-renderer';
import { PlayingCard } from '../PlayingCard';

describe('Playing Card', () => {
  test('renders correctly', () => {
    const wrapper = renderer
      .create(
        <PlayingCard
          card={{
            deck: 'blue',
            suit: 'club',
            value: '6',
          }}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  test('renders face down correctly', () => {
    const wrapper = renderer
      .create(
        <PlayingCard
          faceDown
          card={{
            deck: 'blue',
            suit: 'club',
            value: '6',
          }}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
