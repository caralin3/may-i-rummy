import React from 'react';
import { Button as RNPButton } from 'react-native-paper';

export interface ButtonProps {
  onPress?: () => void;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
  return <RNPButton onPress={onPress}>{title}</RNPButton>;
};
