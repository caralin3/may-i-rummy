import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { Colors, FontSizes, GutterSizes } from '../appearance';

export interface TextProps {
  align?: TextStyle['textAlign'];
  bold?: boolean;
  gutters?: {
    bottom?: keyof typeof GutterSizes;
    left?: keyof typeof GutterSizes;
    right?: keyof typeof GutterSizes;
    top?: keyof typeof GutterSizes;
  };
  italic?: boolean;
  size?: keyof typeof FontSizes;
  style?: TextStyle;
  textColor?: keyof typeof Colors;
}

export const Text: React.FC<TextProps> = ({
  align,
  bold,
  children,
  textColor,
  gutters,
  italic,
  size = 'md',
  style,
}) => (
  <RNText
    style={{
      ...style,
      color: textColor ? Colors[textColor] : !!style && !!style.color ? style.color : undefined,
      fontSize: FontSizes[size],
      fontStyle: italic ? 'italic' : undefined,
      fontWeight: bold ? 'bold' : undefined,
      lineHeight: !!style && !!style.lineHeight ? style.lineHeight : FontSizes[size],
      paddingBottom: !!gutters && !!gutters.bottom ? GutterSizes[gutters.bottom] : undefined,
      paddingLeft: !!gutters && !!gutters.left ? GutterSizes[gutters.left] : undefined,
      paddingRight: !!gutters && !!gutters.right ? GutterSizes[gutters.right] : undefined,
      paddingTop: !!gutters && !!gutters.top ? GutterSizes[gutters.top] : undefined,
      textAlign: align ? align : undefined,
    }}
  >
    {children}
  </RNText>
);
