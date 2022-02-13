import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../components';

export interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Button title='Settings' />
      <Link to={{ screen: 'Home' }}>Home</Link>
    </View>
  );
};
