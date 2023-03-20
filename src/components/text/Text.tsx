/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, Text as NativeText} from 'react-native';
import type {TextProps} from './text.types';

const Text = (props: TextProps) => {
  const {
    children,
    center = false,
    style: styleOverride,
    paddingVertical = 0,
    paddingHorizontal = 0,
    size = 16,
    color = 'black',
    weight = 'normal',
    ...rest
  } = props;
  return (
    <NativeText
      style={[
        center && {textAlign: 'center'},
        {
          paddingVertical,
          paddingHorizontal,
          fontSize: size,
          color,
          fontWeight:
            weight === 'normal'
              ? '400'
              : weight === 'bold'
              ? 'bold'
              : weight === 'light'
              ? '200'
              : weight === 'semiBold'
              ? '600'
              : weight === 'medium'
              ? '500'
              : '400',
          marginBottom: Platform.OS === 'android' ? 2 : 0,
        },
        styleOverride,
      ]}
      allowFontScaling={false}
      {...rest}>
      {children}
    </NativeText>
  );
};

export default Text;
