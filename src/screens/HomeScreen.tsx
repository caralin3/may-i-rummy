import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../components';

export interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
      <Link to={{ screen: 'Settings' }}>Settings</Link>
    </View>
  );
};
