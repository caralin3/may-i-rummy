import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNPButton } from 'react-native-paper';
import { Colors, FontSizes, GutterSizes } from '../appearance';

export interface ButtonProps {
  onPress?: () => void;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
  return (
    <RNPButton style={styles.button} labelStyle={styles.label} color={Colors.yellow} onPress={onPress}>
      {title}
    </RNPButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.purple,
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: GutterSizes.sm,
    width: '100%',
  },
  label: {
    fontFamily: 'Spicy-Rice',
    fontSize: FontSizes.md,
  },
});
