import React, { ReactNode } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
  children: ReactNode;
  style?: TextStyle;
}

const DefaultText = ({ style, children }: Props) => {
  return <Text style={[styles.defaultFontText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultFontText: {
    fontFamily: 'NotoSansKR',
  },
});

export default DefaultText;
