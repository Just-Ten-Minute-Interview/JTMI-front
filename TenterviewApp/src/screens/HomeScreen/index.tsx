import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.top_section}
        colors={['#12B886', '#00c362']}>
        <Text style={styles.top_text}>텐터뷰</Text>
      </LinearGradient>
      <View style={styles.main_section}>
        <View style={styles.box}>
          <View style={styles.sub_box}>
            <Text style={styles.box_text}>프론트엔드</Text>
          </View>
          <View style={styles.sub_box}>
            <Text style={styles.box_text}>CS</Text>
          </View>
          <View style={styles.sub_box}>
            <Text style={styles.box_text}>백엔드</Text>
          </View>
          <View style={styles.sub_box}>
            <Text style={styles.box_text}>최근 터뷰</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const gap = 8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaffed',
  },
  top_section: {
    flex: 4,
    backgroundColor: 'red',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_section: {
    flex: 6,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  box: {
    width: 260,
    height: 260,

    flexWrap: 'wrap',
    paddingHorizontal: gap / -2,
    paddingVertical: gap / -2,
  },
  sub_box: {
    width: 120,
    height: 120,
    borderRadius: 15,
    flexGrow: 1,
    marginHorizontal: gap / 2,
    marginVertical: gap / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00c362',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  box_text: { fontSize: 20, fontWeight: '700', color: '#ffffff' },
  top_text: {
    fontSize: 54,
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default HomeScreen;
