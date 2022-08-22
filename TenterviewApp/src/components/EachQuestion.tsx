import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

function EachQuestion() {
  return (
    <View style={styles.questionContainer}>
      <Pressable style={styles.info}>
        <View>
          <Text style={styles.infoTitle}>Q. 클로저란 무엇인가</Text>
        </View>
        <View>
          <Text>Q. 클로저란 무엇인가</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    width: width - 20,
    height: 50,
    justifyContent: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTitle: {
    color: '#263747',
    fontWeight: '600',
  },
  eachInfo: {
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
});

export default EachQuestion;
