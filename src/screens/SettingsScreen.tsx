import { Link } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Settings</Text>
      <Link to={{ screen: 'Home' }}>Home</Link>
    </View>
  );
};
