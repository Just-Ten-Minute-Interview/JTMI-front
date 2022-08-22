import React from 'react';
import { StyleSheet, Text } from 'react-native';

function DefaultText(props) {
  return (
    <Text style={[styles.defaultFontText, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  defaultFontText: {
    fontFamily: 'NotoSansKR',
  },
});

export default DefaultText;
