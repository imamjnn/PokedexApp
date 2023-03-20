import {ReactNode} from 'react';
import {StyleProp, TextProps as NativeTextProps, TextStyle} from 'react-native';

export interface TextProps extends NativeTextProps {
  children?: string | number | string[] | ReactNode;
  center?: boolean;
  color?: string;
  size?: number;
  weight?: 'normal' | 'medium' | 'light' | 'bold' | 'semiBold' | undefined;
  paddingVertical?: number;
  paddingHorizontal?: number;
  style?: StyleProp<TextStyle>;
}
