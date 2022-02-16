import React from 'react';
import renderer from 'react-test-renderer';
import { Col, Row } from '../Grid';
import { Text } from '../Text';

describe('Grid', () => {
  test('renders Row correctly', () => {
    const wrapper = renderer
      .create(
        <Row>
          <Text>Row</Text>
        </Row>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  test('renders Column correctly', () => {
    const wrapper = renderer
      .create(
        <Row>
          <Col>
            <Text>Col</Text>
          </Col>
          <Col>
            <Text>Col</Text>
          </Col>
        </Row>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
