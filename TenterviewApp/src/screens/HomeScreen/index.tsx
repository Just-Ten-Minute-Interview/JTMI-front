import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
          <LinearGradient
            style={styles.sub_box}
            colors={['#12B886', '#00c362']}>
            <View style={styles.sub_box_inner_top} />
            <View style={styles.sub_box_inner_bottom}>
              <Text style={styles.box_text}>프론트엔드</Text>
            </View>
          </LinearGradient>
          <LinearGradient
            style={styles.sub_box}
            colors={['#12B886', '#00c362']}>
            <View style={styles.sub_box_inner_top} />
            <View style={styles.sub_box_inner_bottom}>
              <Text style={styles.box_text}>CS</Text>
            </View>
          </LinearGradient>
          <LinearGradient
            style={styles.sub_box}
            colors={['#12B886', '#00c362']}>
            <View style={styles.sub_box_inner_top} />
            <View style={styles.sub_box_inner_bottom}>
              <Text style={styles.box_text}>백엔드</Text>
            </View>
          </LinearGradient>
          <LinearGradient
            style={styles.sub_box}
            colors={['#12B886', '#00c362']}>
            <View style={styles.sub_box_inner_top} />
            <View style={styles.sub_box_inner_bottom}>
              <Text style={styles.box_text}>내 히스토리</Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const gap = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaffed',
  },
  top_section: {
    flex: 2,
    backgroundColor: 'red',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_section: {
    flex: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: gap / -2,
    paddingVertical: gap / -2,
  },

  sub_box: {
    width: 160,
    height: 160,
    borderRadius: 25,
    flexGrow: 1,
    marginHorizontal: gap / 2,
    marginVertical: gap / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  sub_box_inner_top: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: 'red',
  },

  sub_box_inner_bottom: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box_text: { fontSize: 20, fontWeight: '700', color: '#ffffff' },

  top_text: {
    fontSize: 54,
    color: '#ffffff',
    fontWeight: '700',
  },

  box_image: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
