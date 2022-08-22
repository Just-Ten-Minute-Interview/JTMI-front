import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import DefaultText from './DefaultText';

const { width, height } = Dimensions.get('window');

function MainHeader({ route }) {
  return (
    <View style={styles.container}>
      <View style={styles.topWrap}>
        <View>
          <DefaultText style={styles.title}>{route.params?.name}</DefaultText>
        </View>
        <View>
          <DefaultText style={styles.subText}>
            총 <DefaultText style={styles.number}>100</DefaultText> 질문
          </DefaultText>
        </View>
      </View>
      <View style={styles.filter}>
        <DefaultText>{route.params?.name}</DefaultText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 140,
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 5,
  },
  topWrap: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#263747',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subText: { fontSize: 18, fontWeight: '500', color: '#263747' },
  number: { color: '#00c362' },
  filter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MainHeader;
