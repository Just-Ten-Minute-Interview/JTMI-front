import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function EachQuestion() {
  return (
    <View style={styles.questionContainer}>
      <Pressable>
        <Text>Q. 클로저란 무엇인가</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  info: {
    flexDirection: 'row',
  },
  eachInfo: {
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
});

export default EachQuestion;
