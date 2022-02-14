import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { PlayingCard, Row, Text } from '../components';

export interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Home</Text>
      <Row>
        <PlayingCard faceDown deck='red' value='2' suit='club' />
        <PlayingCard faceDown deck='blue' value='3' suit='heart' />
        <PlayingCard deck='red' value='4' suit='spade' />
      </Row>
      <Row>
        <PlayingCard deck='blue' value='5' suit='diamond' />
        <PlayingCard deck='red' value='6' suit='club' />
        <PlayingCard deck='blue' value='7' suit='heart' />
      </Row>
      {/* <Row>
        <PlayingCard deck='red' value='8' suit='spade' />
        <PlayingCard deck='blue' value='9' suit='diamond' />
        <PlayingCard deck='blue' value='10' suit='club' />
      </Row> */}
      <Row>
        <PlayingCard deck='red' value='jack' suit='spade' />
        <PlayingCard deck='blue' value='queen' suit='diamond' />
        <PlayingCard deck='red' value='king' suit='club' />
      </Row>
      <Row>
        <PlayingCard deck='red' value='ace' suit='heart' />
        <PlayingCard deck='blue' value='joker' suit='spade' />
        <PlayingCard deck='red' value='joker' suit='spade' />
      </Row>
      <Link to={{ screen: 'Settings' }}>Settings</Link>
    </View>
  );
};
