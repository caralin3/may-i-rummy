import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { PlayingCard, Row, Text } from '../components';

export interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>May I?</Text>
      <Link to={{ screen: 'Settings' }}>Settings</Link>
    </View>
  );
};
