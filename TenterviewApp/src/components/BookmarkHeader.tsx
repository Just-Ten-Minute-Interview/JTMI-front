import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import DefaultText from './DefaultText';

const { width } = Dimensions.get('window');

const BookmarkHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topWrap}>
        <View>
          <DefaultText style={styles.title}>나의 리스트</DefaultText>
        </View>
        <View>
          <DefaultText style={styles.subText}>
            총 <DefaultText style={styles.number}>100</DefaultText> 질문
          </DefaultText>
        </View>
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.filterLabel}>
          <DefaultText style={styles.filterText}>전체</DefaultText>
        </View>
      </View>
    </View>
  );
};

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
    fontSize: 34,
    fontWeight: 'bold',
  },
  subText: { fontSize: 18, fontWeight: '500', color: '#263747' },
  number: { color: '#00c362' },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  filterLabel: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 32,
    backgroundColor: '#12B886',
  },
  filterText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default BookmarkHeader;
