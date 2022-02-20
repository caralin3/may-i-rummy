import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../components';

export interface RulesScreenProps {}

export const RulesScreen: React.FC<RulesScreenProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Rules</Text>
      <Link to={{ screen: 'Home' }}>Home</Link>
    </View>
  );
};
