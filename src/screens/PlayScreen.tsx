import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../components';

export interface PlayScreenProps {}

export const PlayScreen: React.FC<PlayScreenProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Play</Text>
      <Link to={{ screen: 'Home' }}>Home</Link>
    </View>
  );
};
