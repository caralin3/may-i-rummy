import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '../components';

export interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Settings</Text>
      <Link to={{ screen: 'Home' }}>Home</Link>
    </View>
  );
};
